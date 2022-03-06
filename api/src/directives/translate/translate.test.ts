import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import translate from './translate'

describe('translate directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(translate.schema).toBeTruthy()
    expect(getDirectiveName(translate.schema)).toBe('translate')
  })

  it('has a translate implementation transforms the value', () => {
    const mockExecution = mockRedwoodDirective(translate, {
      mockedResolvedValue: 'foo',
    })

    expect(mockExecution()).toBe('bar')
  })
})
