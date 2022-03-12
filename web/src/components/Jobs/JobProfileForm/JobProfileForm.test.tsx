import { render } from '@redwoodjs/testing/web'

import JobProfileForm from './JobProfileForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('JobProfileForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobProfileForm />)
    }).not.toThrow()
  })
})
