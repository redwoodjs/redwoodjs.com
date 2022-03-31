import { render } from '@redwoodjs/testing/web'

import StartupForm from './StartupForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupForm />)
    }).not.toThrow()
  })
})
