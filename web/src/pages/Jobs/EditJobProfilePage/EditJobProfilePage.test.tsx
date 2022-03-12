import { render } from '@redwoodjs/testing/web'

import EditJobProfilePage from './EditJobProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditJobProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditJobProfilePage />)
    }).not.toThrow()
  })
})
