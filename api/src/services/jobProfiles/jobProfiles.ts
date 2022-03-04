import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const jobProfiles = ({ limit }) => {
  const options = {
    orderBy: { createdAt: 'desc' },
  }

  if (limit) {
    options.take = limit
  }

  return db.jobProfile.findMany(options)
}

export const jobProfile = ({ id }: Prisma.JobProfileWhereUniqueInput) => {
  return db.jobProfile.findUnique({
    where: { id },
  })
}

interface CreateJobProfileArgs {
  input: Prisma.JobProfileCreateInput
}

export const createJobProfile = ({ input }: CreateJobProfileArgs) => {
  return db.jobProfile.create({
    data: input,
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
