import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

import type {
  MutationcreateAuthorArgs,
  MutationupdateAuthorArgs,
} from 'types/graphql'

export const authors = () => {
  return db.author.findMany({ include: { socialLinks: true } })
}

export const author = ({ id }: Prisma.AuthorWhereUniqueInput) => {
  return db.author.findUnique({ include: { socialLinks: true }, where: { id } })
}

export const createAuthor = ({
  input: { socialLinks, ...data },
}: MutationcreateAuthorArgs) => {
  return db.author.create({
    data: { ...data, socialLinks: { createMany: { data: socialLinks } } },
  })
}

export const updateAuthor = ({ id, input: data }: MutationupdateAuthorArgs) => {
  return db.author.update({
    data,
    include: { socialLinks: true },
    where: { id },
  })
}

export const deleteAuthor = ({ id }: Prisma.AuthorWhereUniqueInput) => {
  return db.author.delete({ where: { id } })
}

export const Author = {
  avatar: (_obj, { root }: ResolverArgs<ReturnType<typeof author>>) =>
    db.author.findUnique({ where: { id: root.id } }).avatar(),
}
