import { render } from '@redwoodjs/testing/web'

import AllJobsPage from './AllJobsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AllJobsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllJobsPage />)
    }).not.toThrow()
  })
})
