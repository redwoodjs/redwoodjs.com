import { render } from '@redwoodjs/testing/web'

import StartupShowcaseIntro from './StartupShowcaseIntro'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupShowcaseIntro', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupShowcaseIntro />)
    }).not.toThrow()
  })
})
