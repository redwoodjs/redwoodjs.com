import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

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

export const jobProfile = async ({ id }: Prisma.JobProfileWhereUniqueInput) => {
  const profile = await db.jobProfile.findUnique({
    where: { id },
  })

  return { ...profile, locations: JSON.parse(profile.locations) }
}

interface CreateJobProfileArgs {
  input: Prisma.JobProfileCreateInput
}

export const createJobProfile = ({ input }: CreateJobProfileArgs) => {
  console.info(input)

  return db.jobProfile.create({
    data: {
      ...input,
      locations: JSON.stringify(input.locations),
      status: 'available',
    },
  })
}

interface UpdateJobProfileArgs extends Prisma.JobProfileWhereUniqueInput {
  input: Prisma.JobProfileUpdateInput
}

export const updateJobProfile = ({ id, input }: UpdateJobProfileArgs) => {
  return db.jobProfile.update({
    data: input,
    where: { id },
  })
}

export const deleteJobProfile = ({ id }: Prisma.JobProfileWhereUniqueInput) => {
  return db.jobProfile.delete({
    where: { id },
  })
}
