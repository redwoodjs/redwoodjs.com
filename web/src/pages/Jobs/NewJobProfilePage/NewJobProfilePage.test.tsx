import { render } from '@redwoodjs/testing/web'

import NewJobProfilePage from './NewJobProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewJobProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewJobProfilePage />)
    }).not.toThrow()
  })
})
