import { render } from '@redwoodjs/testing/web'

import JobProfilePage from './JobProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobProfilePage id={1} />)
    }).not.toThrow()
  })
})
