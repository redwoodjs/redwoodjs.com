import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

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
  return db.showcase.findMany({
    orderBy: { id: 'desc' },
    include: {
      socialLinks: true,
      localizations: { select: { id: true, language: true } },
    },
  })
}

export const examples = ({ input }) => {
  return db.showcase.findMany({
    include: {
      socialLinks: true,
      localizations: true,
      media: { select: { id: true, src: true } },
    },
    where: {
      isPublished: true,
      tags: { some: { label: input.tag } },
    },
  })
}

export const showcase = async ({ id }: Prisma.ShowcaseWhereUniqueInput) => {
  return db.showcase.findUnique({
    include: {
      socialLinks: { select: { id: true, link: true, platform: true } },
      media: { select: { id: true, src: true } },
    },
    where: { id },
  })
}

export const createShowcase = ({
  input: { socialLinks, ...input },
}: MutationcreateShowcaseArgs) => {
  const { imageUrl, ...data } = input

  return db.showcase
    .create({
      data: {
        ...data,
        localizations: undefined, // TODO: Localize
        socialLinks: { createMany: { data: socialLinks } },
      },
    })
    .then(async (showcase) => {
      imageUrl &&
        (await db.media.create({
          data: {
            src: imageUrl,
            type: 'picture',
            showcase: { connect: { id: showcase.id } },
          },
        }))
      return showcase
    })
}

interface UpdateShowcaseArgs extends Prisma.ShowcaseWhereUniqueInput {
  input: Prisma.ShowcaseUpdateInput & { imageUrl: string }
}

export const updateShowcase = ({ id, input }: UpdateShowcaseArgs) => {
  const { imageUrl, ...data } = input

  let media = {}

  if (imageUrl) {
    media = {
      upsert: {
        create: { src: imageUrl },
        update: { src: imageUrl },
      },
    }
  }

  return db.showcase.update({
    data: {
      ...data,
      media,
      socialLinks: {
        upsert: data?.socialLinks?.map((link) => ({
          create: { platform: link?.platform, link: link?.link },
          update: { link: link?.link },
        })),
      },
    },
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

export const showcaseJobs = async ({ company }) => {
  return (
    await db.job.findMany({
      orderBy: { createdAt: 'desc' },
      where: { company },
    })
  ).map((job) => ({
    ...job,
    locations: JSON.parse(job.locations),
    compensation: JSON.parse(job.compensation),
    perks: JSON.parse(job.perks),
  }))
}

export const Showcase = {
  socialLinks: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).socialLinks(),
  localizations: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).localizations(),
  media: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).media(),
  tags: (_obj, { root }: ResolverArgs<ReturnType<typeof showcase>>) =>
    db.showcase.findUnique({ where: { id: root.id } }).tags(),
}
