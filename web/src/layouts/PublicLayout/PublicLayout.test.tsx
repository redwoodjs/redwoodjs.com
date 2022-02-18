import { render } from '@redwoodjs/testing/web'

import PublicLayout from './PublicLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PublicLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicLayout />)
    }).not.toThrow()
  })
})
