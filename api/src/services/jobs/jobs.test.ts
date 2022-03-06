import { jobs, job, createJob, updateJob, deleteJob } from './jobs'
import type { StandardScenario } from './jobs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobs', () => {
  scenario('returns all jobs', async (scenario: StandardScenario) => {
    const result = await jobs()

    expect(result.length).toEqual(Object.keys(scenario.job).length)
  })

  scenario('returns a single job', async (scenario: StandardScenario) => {
    const result = await job({ id: scenario.job.one.id })

    expect(result).toEqual(scenario.job.one)
  })

  scenario('creates a job', async () => {
    const result = await createJob({
      input: {
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
        token: 'String',
      },
    })

    expect(result.email).toEqual('String')
    expect(result.applyUrl).toEqual('String')
    expect(result.company).toEqual('String')
    expect(result.logo).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.locations).toEqual('String')
    expect(result.compensation).toEqual('String')
    expect(result.perks).toEqual('String')
    expect(result.aboutJob).toEqual('String')
    expect(result.aboutApplicant).toEqual('String')
    expect(result.aboutCompany).toEqual('String')
    expect(result.token).toEqual('String')
  })

  scenario('updates a job', async (scenario: StandardScenario) => {
    const original = await job({ id: scenario.job.one.id })
    const result = await updateJob({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a job', async (scenario: StandardScenario) => {
    const original = await deleteJob({ id: scenario.job.one.id })
    const result = await job({ id: original.id })

    expect(result).toEqual(null)
  })
})
