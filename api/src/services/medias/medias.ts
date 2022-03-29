import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const medias = () => {
  return db.media.findMany()
}

export const media = ({ id }: Prisma.MediaWhereUniqueInput) => {
  return db.media.findUnique({
    where: { id },
    include: { showcase: { select: { id: true, label: true } } },
  })
}

interface CreateMediaArgs {
  input: Prisma.MediaCreateInput
}

export const createMedia = ({ input }: CreateMediaArgs) => {
  return db.media.create({
    data: input,
  })
}

interface UpdateMediaArgs extends Prisma.MediaWhereUniqueInput {
  input: Prisma.MediaUpdateInput
}

export const updateMedia = ({ id, input }: UpdateMediaArgs) => {
  return db.media.update({
    data: input,
    where: { id },
  })
}

export const deleteMedia = ({ id }: Prisma.MediaWhereUniqueInput) => {
  return db.media.delete({
    where: { id },
  })
}

export const Media = {
  author: (_obj, { root }: ResolverArgs<ReturnType<typeof media>>) =>
    db.media.findUnique({ where: { id: root.id } }).author(),
  showcase: (_obj, { root }: ResolverArgs<ReturnType<typeof media>>) =>
    db.media.findUnique({ where: { id: root.id } }).showcase(),
}
