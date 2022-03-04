import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MediaCreateArgs>({
  media: {
    one: { data: { src: 'String', type: 'video' } },
    two: { data: { src: 'String', type: 'video' } },
  },
})

export type StandardScenario = typeof standard
