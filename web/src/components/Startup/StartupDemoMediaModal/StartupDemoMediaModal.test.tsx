import { render } from '@redwoodjs/testing/web'

import StartupDemoMediaModal from './StartupDemoMediaModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartupDemoMediaModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartupDemoMediaModal />)
    }).not.toThrow()
  })
})
