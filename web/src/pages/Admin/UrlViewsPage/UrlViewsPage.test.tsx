import { render } from '@redwoodjs/testing/web'

import UrlViewsPage from './UrlViewsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UrlViewsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UrlViewsPage />)
    }).not.toThrow()
  })
})
