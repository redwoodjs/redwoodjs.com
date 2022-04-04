import { render } from '@redwoodjs/testing/web'

import CommunitySection from './CommunitySection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommunitySection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunitySection />)
    }).not.toThrow()
  })
})
