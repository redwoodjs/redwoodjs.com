import {
  createShowcase,
  deleteShowcase,
  showcase,
  showcases,
  updateShowcase,
} from './showcases'
import type { StandardScenario } from './showcases.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('showcases', () => {
  scenario('returns all showcases', async (scenario: StandardScenario) => {
    const result = await showcases()

    expect(result.length).toEqual(Object.keys(scenario.showcase).length)
  })

  scenario('returns a single showcase', async (scenario: StandardScenario) => {
    const result = await showcase({ id: scenario.showcase.one.id })

    expect(result).toEqual(scenario.showcase.one)
  })

  scenario('creates a showcase', async () => {
    const result = await createShowcase({
      input: { type: 'sample', link: 'String', description: 'String' },
    })

    expect(result.type).toEqual('sample')
    expect(result.link).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a showcase', async (scenario: StandardScenario) => {
    const original = await showcase({ id: scenario.showcase.one.id })
    const result = await updateShowcase({
      id: original.id,
      input: { type: 'module' },
    })

    expect(result.type).toEqual('module')
  })

  scenario('deletes a showcase', async (scenario: StandardScenario) => {
    const original = await deleteShowcase({ id: scenario.showcase.one.id })
    const result = await showcase({ id: original.id })

    expect(result).toEqual(null)
  })
})
