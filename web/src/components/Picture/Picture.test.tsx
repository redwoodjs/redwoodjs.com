import { render } from '@redwoodjs/testing/web'

import Picture from './Picture'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Picture', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Picture />)
    }).not.toThrow()
  })
})
