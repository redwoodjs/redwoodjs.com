import { render } from '@redwoodjs/testing/web'

import NewJobPage from './NewJobPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewJobPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewJobPage />)
    }).not.toThrow()
  })
})
