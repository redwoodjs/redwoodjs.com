import { render } from '@redwoodjs/testing/web'

import JobDisplay from './JobDisplay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobDisplay />)
    }).not.toThrow()
  })
})
