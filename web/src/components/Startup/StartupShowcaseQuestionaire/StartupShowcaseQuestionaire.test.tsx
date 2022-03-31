import { render } from '@redwoodjs/testing/web'

import StartupShowcaseQuestionaire from './StartupShowcaseQuestionaire'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupShowcaseQuestionaire', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupShowcaseQuestionaire />)
    }).not.toThrow()
  })
})
