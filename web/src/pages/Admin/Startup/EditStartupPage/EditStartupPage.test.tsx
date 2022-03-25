import { render } from '@redwoodjs/testing/web'

import EditStartupPage from './EditStartupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditStartupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditStartupPage />)
    }).not.toThrow()
  })
})
