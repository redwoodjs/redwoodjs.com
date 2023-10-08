import { render } from '@redwoodjs/testing/web'

import SidekickPage from './SidekickPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SidekickPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidekickPage />)
    }).not.toThrow()
  })
})
