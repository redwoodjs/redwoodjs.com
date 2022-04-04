import { render } from '@redwoodjs/testing/web'

import TechStackSection from './TechStackSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TechStackSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechStackSection />)
    }).not.toThrow()
  })
})
