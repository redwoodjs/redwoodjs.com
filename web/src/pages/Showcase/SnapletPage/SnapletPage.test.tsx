import { render } from '@redwoodjs/testing/web'

import SnapletPage from './SnapletPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SnapletPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SnapletPage />)
    }).not.toThrow()
  })
})
