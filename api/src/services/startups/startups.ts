import slugify from 'slugify'
import { validate } from '@redwoodjs/api'
import { AuthenticationError } from '@redwoodjs/graphql-server'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

import type {
  MutationCreateStartupArgs,
  MutationDeleteStartupArgs,
  MutationUpdateStartupArgs,
  QueryGetStartupArgs,
  QueryListStartupsArgs,
} from 'types/graphql'

// --

const slugifyStartupName = (name: string) => slugify(name, { lower: true })

// --

export const validateStartupToken = async (slug: string, token: string) => {
  //
  validate(slug, { presence: { message: 'Slug not found' } })
  validate(token, { presence: { message: 'Token not found' } })

  // --

  const startup = await db.startup.findFirst({ where: { slug, token } })
  if (!startup) throw new AuthenticationError('Startup not found')

  // --

  return startup
}

// --

export const CreateStartup = ({
  input: { socialLinks, ...input },
}: MutationCreateStartupArgs) => {
  //
  const slug = slugifyStartupName(input.name)

  // --

  return db.startup.create({
    data: {
      ...input,
      slug,
      socialLinks: { createMany: { data: socialLinks } },
    },
  })
}

// --

export const ListStartups = ({ onlyPublished }: QueryListStartupsArgs) => {
  //
  const where = { published: onlyPublished ? true : undefined }

  // --

  return db.startup.findMany({
    include: { socialLinks: true },
    orderBy: { createdAt: 'asc' },
    where,
  })
}

// --

export const GetStartup = ({ slug }: QueryGetStartupArgs) =>
  db.startup.findUnique({ include: { socialLinks: true }, where: { slug } })

// --

export const UpdateStartup = async ({
  input,
  slug,
  token,
}: MutationUpdateStartupArgs) => {
  //
  await validateStartupToken(slug, token)

  // --

  const newSlug = input.name ? slugifyStartupName(input.name) : undefined

  // --

  return db.startup.update({
    data: { ...input, slug: newSlug },
    where: { slug },
  })
}

// --

export const DeleteStartup = ({ id }: MutationDeleteStartupArgs) =>
  db.startup.delete({ where: { id } })

// --

export const Showcase = {
  socialLinks: (_obj, { root }: ResolverArgs<ReturnType<typeof GetStartup>>) =>
    db.startup.findUnique({ where: { id: root.id } }).socialLinks(),
}
