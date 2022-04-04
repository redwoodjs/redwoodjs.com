import { render } from '@redwoodjs/testing/web'

import FeaturesSection from './FeaturesSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeaturesSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturesSection />)
    }).not.toThrow()
  })
})
