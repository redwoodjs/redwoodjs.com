import { render } from '@redwoodjs/testing/web'

import Loading from './Loading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Loading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })
})
