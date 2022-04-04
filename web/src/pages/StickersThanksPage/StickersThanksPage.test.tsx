import { render } from '@redwoodjs/testing/web'

import StickersThanksPage from './StickersThanksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StickersThanksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StickersThanksPage />)
    }).not.toThrow()
  })
})
