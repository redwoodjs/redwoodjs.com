import { render } from '@redwoodjs/testing/web'

import LogosPage from './LogosPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LogosPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogosPage />)
    }).not.toThrow()
  })
})
