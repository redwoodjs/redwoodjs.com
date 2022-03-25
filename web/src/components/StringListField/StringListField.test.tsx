import { render } from '@redwoodjs/testing/web'

import StringListField from './StringListField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StringListField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StringListField />)
    }).not.toThrow()
  })
})
