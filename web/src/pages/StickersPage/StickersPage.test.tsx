import { render } from '@redwoodjs/testing/web'

import StickersPage from './StickersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StickersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StickersPage />)
    }).not.toThrow()
  })
})
