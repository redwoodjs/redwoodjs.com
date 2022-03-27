import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

import type { MutationcreateShowcaseArgs } from 'types/graphql'

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
  return db.showcase.findMany({ include: { socialLinks: true } })
}

export const examples = ({ input }) => {
  return db.showcase.findMany({
    include: { socialLinks: true, localizations: true },
    where: {
      isPublished: true,
      tags: { some: { label: input.tag } },
    },
  })
}

export const showcase = ({ id }: Prisma.ShowcaseWhereUniqueInput) => {
  return db.showcase.findUnique({
    include: { socialLinks: true },
    where: { id },
  })
}

export const createShowcase = ({
  input: { mediaId, socialLinks, ...data },
}: MutationcreateShowcaseArgs) => {
  return db.showcase.create({
    data: {
      ...data,
      localizations: undefined, // TODO: Localize
      media: { connect: { id: mediaId } },
      socialLinks: { createMany: { data: socialLinks } },
    },
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

export const deleteShowcase = async ({
  id,
}: Prisma.ShowcaseWhereUniqueInput) => {
  await db.showcaseLocalization.deleteMany({ where: { showcaseId: id } })

  return db.showcase.delete({
    where: { id },
  })
}

export const showcaseJobs = ({ company }) => {
  return db.job.findMany({ orderBy: { createdAt: 'desc' }, where: { company } })
}

export const Showcase = {
  media: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).media(),
  tags: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).tags(),
}
