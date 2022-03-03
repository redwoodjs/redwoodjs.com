import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShowcaseLocalizationCreateArgs>({
  showcaseLocalization: {
    one: { data: { description: 'String' } },
    two: { data: { description: 'String' } },
  },
})

export type StandardScenario = typeof standard
