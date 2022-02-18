import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: { data: { label: 'String' } },
    two: { data: { label: 'String' } },
  },
})

export type StandardScenario = typeof standard
