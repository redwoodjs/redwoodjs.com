import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AuthorCreateArgs>({
  author: {
    one: { data: { firstname: 'String', lastname: 'String' } },
    two: { data: { firstname: 'String', lastname: 'String' } },
  },
})

export type StandardScenario = typeof standard
