import { render } from '@redwoodjs/testing/web'

import Footer from './Footer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Footer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Footer />)
    }).not.toThrow()
  })
})
