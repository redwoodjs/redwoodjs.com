import type { Prisma } from '@prisma/client'

import {
  QueryjobProfilesArgs,
  MutationcreateJobProfileArgs,
  MutationupdateJobProfileArgs,
  QueryjobProfileArgs,
  MutationdeleteJobProfileArgs,
} from 'types/graphql'
import { db } from 'src/lib/db'

export const jobProfiles = ({ limit }: QueryjobProfilesArgs = {}) => {
  const options = {
    orderBy: { createdAt: 'desc' },
  } as Prisma.JobProfileFindManyArgs

  if (limit) {
    options.take = limit
  }

  return db.jobProfile.findMany(options)
}

export const jobProfile = ({ id }: QueryjobProfileArgs) => {
  return db.jobProfile.findUnique({
    where: { id },
  })
}

export const createJobProfile = ({ input }: MutationcreateJobProfileArgs) => {
  return db.jobProfile.create({
    data: input,
  })
}

export const updateJobProfile = ({
  id,
  input,
}: MutationupdateJobProfileArgs) => {
  return db.jobProfile.update({
    data: input,
    where: { id },
  })
}

export const deleteJobProfile = ({ id }: MutationdeleteJobProfileArgs) => {
  return db.jobProfile.delete({
    where: { id },
  })
}
