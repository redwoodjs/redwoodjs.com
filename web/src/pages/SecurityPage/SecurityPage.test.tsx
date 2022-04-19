import { render } from '@redwoodjs/testing/web'

import SecurityPage from './SecurityPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SecurityPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecurityPage />)
    }).not.toThrow()
  })
})
