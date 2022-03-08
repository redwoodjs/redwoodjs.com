import { render } from '@redwoodjs/testing/web'

import FormTaggable from './FormTaggable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormTaggable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormTaggable />)
    }).not.toThrow()
  })
})
