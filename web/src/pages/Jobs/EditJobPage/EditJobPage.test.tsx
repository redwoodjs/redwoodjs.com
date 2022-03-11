import { render } from '@redwoodjs/testing/web'

import EditJobPage from './EditJobPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditJobPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditJobPage />)
    }).not.toThrow()
  })
})
