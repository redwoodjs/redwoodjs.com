import { render } from '@redwoodjs/testing/web'

import ShowcaseLayout from './ShowcaseLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ShowcaseLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShowcaseLayout />)
    }).not.toThrow()
  })
})
