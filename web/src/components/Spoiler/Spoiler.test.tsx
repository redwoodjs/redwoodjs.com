import { render } from '@redwoodjs/testing/web'

import Spoiler from './Spoiler'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Spoiler', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Spoiler />)
    }).not.toThrow()
  })
})
