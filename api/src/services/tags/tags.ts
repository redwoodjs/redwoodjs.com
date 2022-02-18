import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tags = () => {
  return db.tag.findMany()
}

export const tag = ({ id }: Prisma.TagWhereUniqueInput) => {
  return db.tag.findUnique({
    where: { id },
  })
}

interface CreateTagArgs {
  input: Prisma.TagCreateInput
}

export const createTag = ({ input }: CreateTagArgs) => {
  return db.tag.create({
    data: input,
  })
}

interface UpdateTagArgs extends Prisma.TagWhereUniqueInput {
  input: Prisma.TagUpdateInput
}

export const updateTag = ({ id, input }: UpdateTagArgs) => {
  return db.tag.update({
    data: input,
    where: { id },
  })
}

export const deleteTag = ({ id }: Prisma.TagWhereUniqueInput) => {
  return db.tag.delete({
    where: { id },
  })
}

export const Tag = {
  showcases: (_obj, { root }: ResolverArgs<ReturnType<typeof tag>>) =>
    db.tag.findUnique({ where: { id: root.id } }).showcases(),
}
