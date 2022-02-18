import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const authors = () => {
  return db.author.findMany()
}

export const author = ({ id }: Prisma.AuthorWhereUniqueInput) => {
  return db.author.findUnique({
    where: { id },
  })
}

interface CreateAuthorArgs {
  input: Prisma.AuthorCreateInput
}

export const createAuthor = ({ input }: CreateAuthorArgs) => {
  return db.author.create({
    data: input,
  })
}

interface UpdateAuthorArgs extends Prisma.AuthorWhereUniqueInput {
  input: Prisma.AuthorUpdateInput
}

export const updateAuthor = ({ id, input }: UpdateAuthorArgs) => {
  return db.author.update({
    data: input,
    where: { id },
  })
}

export const deleteAuthor = ({ id }: Prisma.AuthorWhereUniqueInput) => {
  return db.author.delete({
    where: { id },
  })
}

export const Author = {
  avatar: (_obj, { root }: ResolverArgs<ReturnType<typeof author>>) =>
    db.author.findUnique({ where: { id: root.id } }).avatar(),
}
