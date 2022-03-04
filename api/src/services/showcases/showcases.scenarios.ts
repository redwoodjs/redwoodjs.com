import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShowcaseCreateArgs>({
  showcase: {
    one: {
      data: {
        link: 'String',
        description: 'String',
        isPublished: false,
        localization: { create: { description: 'String' } },
      },
    },
    two: {
      data: {
        link: 'String',
        description: 'String',
        isPublished: false,
        localization: { create: { description: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
