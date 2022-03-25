import { render } from '@redwoodjs/testing/web'

import ListPage from './ListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListPage />)
    }).not.toThrow()
  })
})
