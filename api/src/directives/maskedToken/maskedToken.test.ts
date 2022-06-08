import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import maskedToken from './maskedToken'

describe('maskedToken directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(maskedToken.schema).toBeTruthy()
    expect(getDirectiveName(maskedToken.schema)).toBe('maskedToken')
  })

  it('has a maskedToken implementation transforms the value', () => {
    const mockExecution = mockRedwoodDirective(maskedToken, {
      mockedResolvedValue: 'foo',
    })

    expect(mockExecution()).toBe('bar')
  })
})
