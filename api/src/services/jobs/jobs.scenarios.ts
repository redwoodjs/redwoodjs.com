import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        email: 'String',
        applyUrl: 'String',
        company: 'String',
        logo: 'String',
        title: 'String',
        locations: 'String',
        compensation: 'String',
        perks: 'String',
        aboutJob: 'String',
        aboutApplicant: 'String',
        aboutCompany: 'String',
        updatedAt: '2022-03-03T23:15:59Z',
      },
    },
    two: {
      data: {
        email: 'String',
        applyUrl: 'String',
        company: 'String',
        logo: 'String',
        title: 'String',
        locations: 'String',
        compensation: 'String',
        perks: 'String',
        aboutJob: 'String',
        aboutApplicant: 'String',
        aboutCompany: 'String',
        updatedAt: '2022-03-03T23:15:59Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
