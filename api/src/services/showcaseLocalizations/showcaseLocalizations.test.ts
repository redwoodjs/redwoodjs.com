import {
  showcaseLocalizations,
  showcaseLocalization,
  createShowcaseLocalization,
  updateShowcaseLocalization,
  deleteShowcaseLocalization,
} from './showcaseLocalizations'
import type { StandardScenario } from './showcaseLocalizations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('showcaseLocalizations', () => {
  scenario(
    'returns all showcaseLocalizations',
    async (scenario: StandardScenario) => {
      const result = await showcaseLocalizations()

      expect(result.length).toEqual(
        Object.keys(scenario.showcaseLocalization).length
      )
    }
  )

  scenario(
    'returns a single showcaseLocalization',
    async (scenario: StandardScenario) => {
      const result = await showcaseLocalization({
        id: scenario.showcaseLocalization.one.id,
      })

      expect(result).toEqual(scenario.showcaseLocalization.one)
    }
  )

  scenario('creates a showcaseLocalization', async () => {
    const result = await createShowcaseLocalization({
      input: { description: 'String' },
    })

    expect(result.description).toEqual('String')
  })

  scenario(
    'updates a showcaseLocalization',
    async (scenario: StandardScenario) => {
      const original = await showcaseLocalization({
        id: scenario.showcaseLocalization.one.id,
      })
      const result = await updateShowcaseLocalization({
        id: original.id,
        input: { description: 'String2' },
      })

      expect(result.description).toEqual('String2')
    }
  )

  scenario(
    'deletes a showcaseLocalization',
    async (scenario: StandardScenario) => {
      const original = await deleteShowcaseLocalization({
        id: scenario.showcaseLocalization.one.id,
      })
      const result = await showcaseLocalization({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
