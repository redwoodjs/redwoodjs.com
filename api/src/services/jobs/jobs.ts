import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/graphql-server'

import { newJob as sendNewJobEmail } from '../email'

export const jobs = async ({ limit }) => {
  const options = {
    orderBy: { createdAt: 'desc' },
  }

  if (limit) {
    options.take = limit
  }

  const jobs = await db.job.findMany(options)

  return jobs.map((job) => ({
    ...job,
    locations: JSON.parse(job.locations),
    compensation: JSON.parse(job.compensation),
    perks: JSON.parse(job.perks),
  }))
}

export const job = async ({ id, token }) => {
  const job = await db.job.findUnique({
    where: { id },
  })

  if (token && job.token !== token) {
    throw new AuthenticationError('Job not found')
  }

  return {
    ...job,
    locations: JSON.parse(job.locations),
    compensation: JSON.parse(job.compensation),
    perks: JSON.parse(job.perks),
  }
}

interface CreateJobArgs {
  input: Prisma.JobCreateInput
}

export const createJob = async ({ input }: CreateJobArgs) => {
  const newJob = await db.job.create({
    data: {
      ...input,
      locations: JSON.stringify(input.locations),
      compensation: JSON.stringify(input.compensation),
      perks: JSON.stringify(input.perks),
    },
  })

  await sendNewJobEmail({ job: newJob })

  return newJob
}

interface UpdateJobArgs extends Prisma.JobWhereUniqueInput {
  input: Prisma.JobUpdateInput
}

export const updateJob = async ({ id, token, input }: UpdateJobArgs) => {
  const job = db.job.findFirst({
    where: { id, token },
  })

  if (job) {
    return db.job.update({
      data: {
        ...input,
        locations: JSON.stringify(input.locations),
        compensation: JSON.stringify(input.compensation),
        perks: JSON.stringify(input.perks),
      },
      where: { id },
    })
  } else {
    throw new AuthenticationError('Job not found')
  }
}

export const deleteJob = ({ id }: Prisma.JobWhereUniqueInput) => {
  return db.job.delete({
    where: { id },
  })
}
