import { render } from '@redwoodjs/testing/web'

import SocialLinkField from './SocialLinkField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialLinkField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialLinkField />)
    }).not.toThrow()
  })
})
