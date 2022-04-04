import { render } from '@redwoodjs/testing/web'

import GraphqlSection from './GraphqlSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GraphqlSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GraphqlSection />)
    }).not.toThrow()
  })
})
