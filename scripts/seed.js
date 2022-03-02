import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    await db.tag.createMany({
      data: [
        { label: 'canon' },
        { label: 'cms' },
        { label: 'community' },
        { label: 'e-commerce' },
        { label: 'highlight' },
        { label: 'integration' },
        { label: 'sample' },
        { label: 'startup' },
        { label: 'tool' },
      ],
    })

    const tags = await db.tag
      .findMany({ select: { id: true, label: true } })
      .then((tags) =>
        Object.fromEntries(tags.map(({ id, label }) => [label, { id }]))
      )

    const rwLogo = await db.media.create({
      data: {
        type: 'picture',
        src: 'https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg',
      },
      select: { id: true },
    })

    const jamstackGraph = await db.media.create({
      data: {
        type: 'picture',
        src: 'https://d33wubrfki0l68.cloudfront.net/fe55b84dd8ef022e3729071c88f19825f564eaec/d049e/images/structure.png',
      },
      select: { id: true },
    })

    const randomImage = await db.media.create({
      data: {
        type: 'picture',
        src: 'https://user-images.githubusercontent.com/2951/96807389-3eede900-13cb-11eb-828a-52210cd67e3e.png',
      },
      select: { id: true },
    })

    await db.showcase.create({
      data: {
        description:
          'Some music application, with full library, artworks, lyrics, bits of original music videos',
        isPublished: true,
        label: 'Music app',
        link: 'https://redwoodjs.com',
        subtitle: 'Awesome music application example',
        title: 'Music Application',
        media: { connect: rwLogo },
        localization: {
          create: {
            subtitle: 'Awesome music application example',
            title: 'Music Application',
            description:
              'Some music application, with full library, artworks, lyrics, bits of original music videos',
          },
        },
        tags: { connect: [tags.highlight, tags.sample, tags.cms] },
      },
    })

    await db.showcase.create({
      data: {
        description: 'Some ToDo sample application powered by RedwoodJS',
        isPublished: true,
        label: 'Todo App',
        link: 'https://redwoodjs.com',
        subtitle: 'Awesome todo application example',
        title: 'Todo Application',
        media: { connect: jamstackGraph },
        localization: {
          create: {
            description: 'Some ToDo sample application powered by RedwoodJS',
            subtitle: 'Awesome todo application example',
            title: 'Todo Application',
          },
        },
        tags: { connect: [tags.highlight, tags.sample, tags.tool] },
      },
    })

    await db.showcase.create({
      data: {
        description:
          'Some Stripe integration, with full catalogue, checkout & payment process',
        isPublished: true,
        label: 'Stripe integration',
        link: 'https://redwoodjs.com',
        subtitle: 'Awesome stripe integration example',
        title: 'Stripe integration',
        media: { connect: randomImage },
        localization: {
          create: {
            description:
              'Some Stripe integration, with full catalogue, checkout & payment process',
            subtitle: 'Awesome stripe integration example',
            title: 'Stripe integration',
          },
        },
        tags: {
          connect: [
            tags.highlight,
            tags.sample,
            tags.integration,
            tags['e-commerce'],
          ],
        },
      },
    })

    const canonExamples = [...Array(5)].map((_value, index) => ({
      title: 'Canon Example',
      isPublished: true,
      description:
        'Generated canon example, not necessarily curated but with high value nonetheless.',
      link: `https://github.com/redwoodjs/redwood/releases/tag/v0.${
        index + 1
      }.0`,
      localization: {
        create: {
          description:
            'Generated canon example, not necessarily curated but with high value nonetheless.',
        },
      },
      tags: { connect: [tags.sample, tags.canon] },
    }))

    await Promise.allSettled(
      canonExamples.map((data) => db.showcase.create({ data }))
    )

    const communityExamples = [...Array(20)].map((_value, index) => ({
      label: 'Community Example',
      isPublished: true,
      description: 'Generated community example',
      link: `https://github.com/redwoodjs/redwood/releases/tag/v0.${
        index + 1
      }.0`,
      localization: {
        create: {
          description: 'Generated community example',
        },
      },
      tags: { connect: [tags.sample, tags.community] },
    }))

    await Promise.allSettled(
      communityExamples.map((data) => db.showcase.create({ data }))
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
