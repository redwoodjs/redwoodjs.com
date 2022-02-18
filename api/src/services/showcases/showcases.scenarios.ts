import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ShowcaseCreateArgs>({
  showcase: {
    one: { data: { type: 'sample', link: 'String', description: 'String' } },
    two: { data: { type: 'sample', link: 'String', description: 'String' } },
  },
})

export type StandardScenario = typeof standard
