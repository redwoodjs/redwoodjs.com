import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobProfileCreateArgs>({
  jobProfile: {
    one: {
      data: {
        email: 'String',
        portfolioUrl: 'String',
        name: 'String',
        photo: 'String',
        status: 'String',
        title: 'String',
        locations: 'String',
        about: 'String',
        updatedAt: '2022-03-04T22:30:16Z',
      },
    },
    two: {
      data: {
        email: 'String',
        portfolioUrl: 'String',
        name: 'String',
        photo: 'String',
        status: 'String',
        title: 'String',
        locations: 'String',
        about: 'String',
        updatedAt: '2022-03-04T22:30:16Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
