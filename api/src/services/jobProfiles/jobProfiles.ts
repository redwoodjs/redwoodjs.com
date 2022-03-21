import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/graphql-server'

import { newJobProfile as sendNewJobProfileEmail } from '../email'

export const jobProfiles = async ({ limit }) => {
  const options = {
    orderBy: { createdAt: 'desc' },
  }

  if (limit) {
    options.take = limit
  }

  const profiles = await db.jobProfile.findMany(options)

  return profiles.map((profile) => ({
    ...profile,
    locations: JSON.parse(profile.locations),
  }))
}

export const jobProfile = async ({ id, token }) => {
  const profile = await db.jobProfile.findUnique({
    where: { id },
  })

  if (token && profile.token !== token) {
    throw new AuthenticationError('Profile not found')
  }

  return { ...profile, locations: JSON.parse(profile.locations) }
}

interface CreateJobProfileArgs {
  input: Prisma.JobProfileCreateInput
}

export const createJobProfile = async ({ input }: CreateJobProfileArgs) => {
  const newJobProfile = await db.jobProfile.create({
    data: {
      ...input,
      locations: JSON.stringify(input.locations),
    },
  })

  await sendNewJobProfileEmail({ jobProfile: newJobProfile })

  return newJobProfile
}

interface UpdateJobProfileArgs extends Prisma.JobProfileWhereUniqueInput {
  input: Prisma.JobProfileUpdateInput
}

export const updateJobProfile = ({
  id,
  token,
  input,
}: UpdateJobProfileArgs) => {
  const profile = db.jobProfile.findFirst({
    where: { id, token },
  })

  if (profile) {
    return db.jobProfile.update({
      data: {
        ...input,
        locations: JSON.stringify(input.locations),
      },
      where: { id },
    })
  } else {
    throw new AuthenticationError('profile not found')
  }
}

export const deleteJobProfile = ({ id }: Prisma.JobProfileWhereUniqueInput) => {
  return db.jobProfile.delete({
    where: { id },
  })
}
