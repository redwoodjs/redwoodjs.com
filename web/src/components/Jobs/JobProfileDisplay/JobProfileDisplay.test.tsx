import { render } from '@redwoodjs/testing/web'

import JobProfileDisplay from './JobProfileDisplay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobProfileDisplay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobProfileDisplay />)
    }).not.toThrow()
  })
})
