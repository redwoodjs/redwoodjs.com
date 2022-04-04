import { render } from '@redwoodjs/testing/web'

import FinalCtaSection from './FinalCtaSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FinalCtaSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FinalCtaSection />)
    }).not.toThrow()
  })
})
