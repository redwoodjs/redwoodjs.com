import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const connectTagToShowcase = async ({ id, input: { tagId } }) => {
  const showcaseHasTag = await db.showcase
    .count({
      where: { id, tags: { some: { id: tagId } } },
    })
    .then(Boolean)

  const connection = showcaseHasTag ? 'disconnect' : 'connect'

  return db.showcase.update({
    where: { id },
    data: { tags: { [connection]: { id: tagId } }, updatedAt: new Date() },
    select: { id: true },
  })
}

export const showcases = () => {
  return db.showcase.findMany()
}

export const examples = ({ input }) => {
  const type = input?.type ?? 'sample'

  return db.showcase.findMany({
    where: {
      type,
      isPublished: true,
      tags: { some: { label: input.tag } },
    },
  })
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
