import { render } from '@redwoodjs/testing/web'

import TestimonialSection from './TestimonialSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TestimonialSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestimonialSection />)
    }).not.toThrow()
  })
})
