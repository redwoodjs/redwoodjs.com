import { render } from '@redwoodjs/testing/web'

import JobDetailLayout from './JobDetailLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobDetailLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobDetailLayout />)
    }).not.toThrow()
  })
})
