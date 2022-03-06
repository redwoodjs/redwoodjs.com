import {db} from 'api/src/lib/db'
import SeedMedia from './media'
import SeedTag from './tag'

const HighlightIndex = (tags, media) => ({
  musicApplication: {
    description:
      'Some music application, with full library, artworks, lyrics, bits of original music videos',
    isPublished: true,
    label: 'Music app',
    link: 'https://redwoodjs.com/music',
    subtitle: 'Awesome music application example',
    title: 'Music Application',
    media: {connect: {id: media.rwLogo.id}},
    localization: {
      create: {
        subtitle: 'Awesome music application example',
        isValid: true,
        title: 'Music Application',
        description:
          'Some music application, with full library, artworks, lyrics, bits of original music videos',
      },
    },
    tags: {connect: [tags.highlight, tags.sample, tags.cms]},
  }, todoApplication: {
    description: 'Some ToDo sample application powered by RedwoodJS',
    isPublished: true,
    label: 'Todo App',
    link: 'https://redwoodjs.com/todo',
    subtitle: 'Awesome todo application example',
    title: 'Todo Application',
    media: {connect: {id: media.jamstackGraph.id}},
    localization: {
      create: {
        isValid: true,
        description: 'Some ToDo sample application powered by RedwoodJS',
        subtitle: 'Awesome todo application example',
        title: 'Todo Application',
      },
    },
    tags: {connect: [tags.highlight, tags.sample, tags.tool]},
  }, paymentApplication: {
    description:
      'Some Stripe integration, with full catalogue, checkout & payment process',
    isPublished: true,
    label: 'Stripe integration',
    link: 'https://redwoodjs.com/payment',
    subtitle: 'Awesome stripe integration example',
    title: 'Stripe integration',
    media: {connect: {id: media.randomImage.id}},
    localization: {
      create: {
        isValid: false,
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
  }
})

function* CanonGenerator(tags) {
  let index = 0

  while (index < 5) {
    index += 1

    yield {
      title: 'Canon Example',
      isPublished: true,
      description:
        'Generated canon example, not necessarily curated but with high value nonetheless.',
      link: `https://github.com/redwoodjs/redwood/releases/tag/v0.${
        index + 20
      }.0`,
      localization: {
        create: {
          description:
            'Generated canon example, not necessarily curated but with high value nonetheless.',
        },
      },
      tags: {connect: [tags.sample, tags.canon]},
    }
  }
}

function* CommunityGenerator(tags) {
  let index = 0

  while (index < 20) {
    index += 1

    yield {
      label: 'Community Example',
      isPublished: true,
      description: 'Generated community example',
      link: `https://github.com/redwoodjs/redwood/releases/tag/v0.${
        index + 50
      }.0`,
      localization: {
        create: {
          description: 'Generated community example',
        },
      },
      tags: {connect: [tags.sample, tags.community]},
    }
  }
}

export default async function Examples() {
  const medias = await SeedMedia()

  const tags = await SeedTag()

  for (const showcase of Object.values(HighlightIndex(tags, medias))) {
    await db.showcase.upsert({
      create: showcase,
      update: {link: showcase.link},
      where: {link: showcase.link}
    })
  }

  const canonExamples = [...CanonGenerator(tags)];

  for (const canon of canonExamples) {
    await db.showcase.upsert({create: canon, update: canon, where: {link: canon.link}})
  }

  const communityExamples = [...CommunityGenerator(tags)];

  for (const community of communityExamples) {
    await db.showcase.upsert({create: community, update: community, where: {link: community.link}})
  }
}
