import { render } from '@redwoodjs/testing/web'

import ExamplesPage from './ExamplesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ExamplesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExamplesPage />)
    }).not.toThrow()
  })
})
