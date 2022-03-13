import { render } from '@redwoodjs/testing/web'

import JobForm from './JobForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobForm />)
    }).not.toThrow()
  })
})
