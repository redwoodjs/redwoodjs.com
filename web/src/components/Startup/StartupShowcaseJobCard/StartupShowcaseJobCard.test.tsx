import { render } from '@redwoodjs/testing/web'

import StartupShowcaseJobCard from './StartupShowcaseJobCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupShowcaseJobCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupShowcaseJobCard />)
    }).not.toThrow()
  })
})
