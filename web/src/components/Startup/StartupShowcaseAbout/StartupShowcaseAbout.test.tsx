import { render } from '@redwoodjs/testing/web'

import StartupShowcaseAbout from './StartupShowcaseAbout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupShowcaseAbout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupShowcaseAbout />)
    }).not.toThrow()
  })
})
