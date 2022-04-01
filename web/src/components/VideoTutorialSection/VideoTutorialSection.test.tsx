import { render } from '@redwoodjs/testing/web'

import VideoTutorialSection from './VideoTutorialSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoTutorialSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoTutorialSection />)
    }).not.toThrow()
  })
})
