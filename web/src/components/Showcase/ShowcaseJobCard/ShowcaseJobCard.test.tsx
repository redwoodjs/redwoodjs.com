import { render } from '@redwoodjs/testing/web'

import ShowcaseJobCard from './ShowcaseJobCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShowcaseJobCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShowcaseJobCard />)
    }).not.toThrow()
  })
})
