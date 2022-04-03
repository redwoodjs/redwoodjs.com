import { render } from '@redwoodjs/testing/web'

import HeroSection from './HeroSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeroSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeroSection />)
    }).not.toThrow()
  })
})
