import { render } from '@redwoodjs/testing/web'

import LanguagePicker from './LanguagePicker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LanguagePicker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LanguagePicker />)
    }).not.toThrow()
  })
})
