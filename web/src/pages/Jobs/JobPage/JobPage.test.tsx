import { render } from '@redwoodjs/testing/web'

import JobPage from './JobPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobPage />)
    }).not.toThrow()
  })
})
