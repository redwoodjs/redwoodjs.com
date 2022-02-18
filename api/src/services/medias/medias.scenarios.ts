import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MediaCreateArgs>({
  media: {
    one: { data: { url: 'String', type: 'video' } },
    two: { data: { url: 'String', type: 'video' } },
  },
})

export type StandardScenario = typeof standard
