import { render } from '@redwoodjs/testing/web'

import ShowcaseJobCard from './ShowcaseJobCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShowcaseJobCard', () => {
  it('renders successfully', () => {
    const props = {
      id: 1,
      title: 'string',
      locations: 'string',
      aboutJob: 'string',
      createdAt: 'string',
    }
    expect(() => {
      render(<ShowcaseJobCard {...props} />)
    }).not.toThrow()
  })
})
