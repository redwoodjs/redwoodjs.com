import { render } from '@redwoodjs/testing/web'

import StartupPage from './StartupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupPage />)
    }).not.toThrow()
  })
})
