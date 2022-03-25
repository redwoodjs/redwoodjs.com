import { render } from '@redwoodjs/testing/web'

import StartupDemoMedia from './StartupDemoMedia'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupDemoMedia', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupDemoMedia />)
    }).not.toThrow()
  })
})
