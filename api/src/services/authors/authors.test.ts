import {
  author,
  authors,
  createAuthor,
  deleteAuthor,
  updateAuthor,
} from './authors'
import type { StandardScenario } from './authors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('authors', () => {
  scenario('returns all authors', async (scenario: StandardScenario) => {
    const result = await authors()

    expect(result.length).toEqual(Object.keys(scenario.author).length)
  })

  scenario('returns a single author', async (scenario: StandardScenario) => {
    const result = await author({ id: scenario.author.one.id })

    expect(result).toEqual(scenario.author.one)
  })

  scenario('creates a author', async () => {
    const result = await createAuthor({
      input: {
        firstname: 'String',
        lastname: 'String',
        isEmailPublic: false,
        pronoun: 'they',
        socialLinks: [],
      },
    })

    expect(result.firstname).toEqual('String')
    expect(result.lastname).toEqual('String')
  })

  scenario('updates a author', async (scenario: StandardScenario) => {
    const original = await author({ id: scenario.author.one.id })
    const result = await updateAuthor({
      id: original.id,
      input: { firstname: 'String2' },
    })

    expect(result.firstname).toEqual('String2')
  })

  scenario('deletes a author', async (scenario: StandardScenario) => {
    const original = await deleteAuthor({ id: scenario.author.one.id })
    const result = await author({ id: original.id })

    expect(result).toEqual(null)
  })
})
