import { render } from '@redwoodjs/testing/web'

import GithubStars from './GithubStars'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GithubStars', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GithubStars />)
    }).not.toThrow()
  })
})
