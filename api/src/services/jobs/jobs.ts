import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const jobs = () => {
  return db.job.findMany()
}

export const job = ({ id }: Prisma.JobWhereUniqueInput) => {
  return db.job.findUnique({
    where: { id },
  })
}

interface CreateJobArgs {
  input: Prisma.JobCreateInput
}

export const createJob = ({ input }: CreateJobArgs) => {
  return db.job.create({
    data: input,
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
