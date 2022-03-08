import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

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

export const job = async ({ id }: Prisma.JobWhereUniqueInput) => {
  const job = await db.job.findUnique({
    where: { id },
  })

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

export const createJob = ({ input }: CreateJobArgs) => {
  return db.job.create({
    data: {
      ...input,
      locations: JSON.stringify(input.locations),
      compensation: JSON.stringify(input.compensation),
      perks: JSON.stringify(input.perks),
    },
  })
}

interface UpdateJobArgs extends Prisma.JobWhereUniqueInput {
  input: Prisma.JobUpdateInput
}

export const updateJob = ({ id, input }: UpdateJobArgs) => {
  return db.job.update({
    data: input,
    where: { id },
  })
}

export const deleteJob = ({ id }: Prisma.JobWhereUniqueInput) => {
  return db.job.delete({
    where: { id },
  })
}
