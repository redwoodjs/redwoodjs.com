import { render } from '@redwoodjs/testing/web'

import MissionSection from './MissionSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MissionSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MissionSection />)
    }).not.toThrow()
  })
})
