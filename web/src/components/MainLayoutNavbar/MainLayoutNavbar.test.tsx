import { render } from '@redwoodjs/testing/web'

import MainLayoutNavbar from './MainLayoutNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainLayoutNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainLayoutNavbar />)
    }).not.toThrow()
  })
})
