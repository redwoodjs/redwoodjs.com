import type { PrismaClient } from '@prisma/client'

export default async ({ db }: { db: PrismaClient }) => {
  await db.tag.createMany({
    data: [
      { label: 'cms' },
      { label: 'sample' },
      { label: 'startup' },
      { label: 'community' },
      { label: 'integration' },
      { label: 'e-commerce' },
      { label: 'tool' },
    ],
  })

  await db.showcase.create({
    data: {
      description:
        'Some music application, with full library, artworks, lyrics, bits of original music videos',
      isPublished: true,
      label: 'Music app',
      link: '',
      source: '',
      subtitle: '',
      title: 'Music Application',
      type: 'sample',
    },
  })
}
