import {
  jobProfiles,
  jobProfile,
  createJobProfile,
  updateJobProfile,
  deleteJobProfile,
} from './jobProfiles'
import type { StandardScenario } from './jobProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobProfiles', () => {
  scenario('returns all jobProfiles', async (scenario: StandardScenario) => {
    const result = await jobProfiles()

    expect(result.length).toEqual(Object.keys(scenario.jobProfile).length)
  })

  scenario(
    'returns a single jobProfile',
    async (scenario: StandardScenario) => {
      const result = await jobProfile({ id: scenario.jobProfile.one.id })

      expect(result).toEqual(scenario.jobProfile.one)
    }
  )

  scenario('creates a jobProfile', async () => {
    const result = await createJobProfile({
      input: {
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
    })

    expect(result.email).toEqual('String')
    expect(result.portfolioUrl).toEqual('String')
    expect(result.name).toEqual('String')
    expect(result.photo).toEqual('String')
    expect(result.status).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.locations).toEqual('String')
    expect(result.about).toEqual('String')
    expect(result.updatedAt).toEqual('2022-03-04T22:30:16Z')
  })

  scenario('updates a jobProfile', async (scenario: StandardScenario) => {
    const original = await jobProfile({ id: scenario.jobProfile.one.id })
    const result = await updateJobProfile({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a jobProfile', async (scenario: StandardScenario) => {
    const original = await deleteJobProfile({ id: scenario.jobProfile.one.id })
    const result = await jobProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
