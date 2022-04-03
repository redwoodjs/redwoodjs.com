import { render } from '@redwoodjs/testing/web'

import FundingShoutout from './FundingShoutout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FundingShoutout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FundingShoutout />)
    }).not.toThrow()
  })
})
