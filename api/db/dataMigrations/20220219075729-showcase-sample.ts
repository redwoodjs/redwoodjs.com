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

  const rwLogo = await db.media.create({
    data: {
      type: 'picture',
      url: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
    },
    select: { id: true },
  })

  await db.showcase.createMany({
    data: [
      {
        description:
          'Some music application, with full library, artworks, lyrics, bits of original music videos',
        isPublished: true,
        isHighlight: true,
        label: 'Music app',
        link: 'https://redwoodjs.com',
        source: 'https://redwoodjs.com',
        subtitle: 'Awesome music application example',
        title: 'Music Application',
        type: 'sample',
        mediaId: rwLogo.id,
      },
      {
        description: 'Some ToDo sample application powered by RedwoodJS',
        isPublished: true,
        label: 'Todo App',
        link: 'https://redwoodjs.com',
        source: 'https://redwoodjs.com',
        subtitle: 'Awesome todo application example',
        title: 'Todo Application',
        type: 'sample',
      },
      {
        description:
          'Some Stripe integration, with full catalogue, checkout & payment process',
        isPublished: true,
        label: 'Stripe integration',
        link: 'https://redwoodjs.com',
        source: 'https://redwoodjs.com',
        subtitle: 'Awesome stripe integration example',
        title: 'Stripe integration',
        type: 'sample',
      },
    ],
  })
}
