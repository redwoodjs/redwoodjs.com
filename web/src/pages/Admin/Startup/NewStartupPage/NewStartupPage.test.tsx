import { render } from '@redwoodjs/testing/web'

import NewStartupPage from './NewStartupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewStartupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewStartupPage />)
    }).not.toThrow()
  })
})
