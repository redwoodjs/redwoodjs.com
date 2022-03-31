import { render } from '@redwoodjs/testing/web'

import StartupShowcaseDemo from './StartupShowcaseDemo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupShowcaseDemo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupShowcaseDemo />)
    }).not.toThrow()
  })
})
