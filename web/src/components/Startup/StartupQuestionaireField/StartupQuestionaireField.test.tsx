import { render } from '@redwoodjs/testing/web'

import StartupQuestionaireField from './StartupQuestionaireField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupQuestionaireField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupQuestionaireField />)
    }).not.toThrow()
  })
})
