import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const showcases = () => {
  return db.showcase.findMany()
}

export const showcase = ({ id }: Prisma.ShowcaseWhereUniqueInput) => {
  return db.showcase.findUnique({
    where: { id },
  })
}

interface CreateShowcaseArgs {
  input: Prisma.ShowcaseCreateInput
}

export const createShowcase = ({ input }: CreateShowcaseArgs) => {
  return db.showcase.create({
    data: input,
  })
}

interface UpdateShowcaseArgs extends Prisma.ShowcaseWhereUniqueInput {
  input: Prisma.ShowcaseUpdateInput
}

export const updateShowcase = ({ id, input }: UpdateShowcaseArgs) => {
  return db.showcase.update({
    data: input,
    where: { id },
  })
}

export const deleteShowcase = ({ id }: Prisma.ShowcaseWhereUniqueInput) => {
  return db.showcase.delete({
    where: { id },
  })
}

export const Showcase = {
  media: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).media(),
  tags: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).tags(),
}
