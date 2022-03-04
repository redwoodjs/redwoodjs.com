import { render } from '@redwoodjs/testing/web'

import SocialLinkExternal from './SocialLinkExternal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialLinkExternal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialLinkExternal link="#" platform="github" />)
    }).not.toThrow()
  })
})
