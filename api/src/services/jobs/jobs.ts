import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import {
  MutationcreateJobArgs,
  MutationdeleteJobArgs,
  MutationupdateJobArgs,
  QueryjobArgs,
  QueryjobsArgs,
} from 'types/graphql'

export const jobs = ({ limit }: QueryjobsArgs = {}) => {
  const options = {
    orderBy: { createdAt: 'desc' },
  } as Prisma.JobFindManyArgs

  if (limit) {
    options.take = limit
  }

  return db.job.findMany(options)
}

export const job = ({ id }: QueryjobArgs) => {
  return db.job.findUnique({
    where: { id },
  })
}

export const createJob = ({ input }: MutationcreateJobArgs) => {
  return db.job.create({
    data: input,
  })
}

export const updateJob = ({ id, input }: MutationupdateJobArgs) => {
  return db.job.update({
    data: input,
    where: { id },
  })
}

export const deleteJob = ({ id }: MutationdeleteJobArgs) => {
  return db.job.delete({
    where: { id },
  })
}
