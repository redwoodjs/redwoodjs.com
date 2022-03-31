import { render } from '@redwoodjs/testing/web'

import StartupsPage from './StartupsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupsPage />)
    }).not.toThrow()
  })
})
