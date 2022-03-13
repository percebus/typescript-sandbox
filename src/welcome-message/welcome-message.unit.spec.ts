import { getWelcomeMessage } from './getWelcomeMessage'
import welcomePerson from './welcomePerson'

describe('welcomePerson', () => {
  it('equals "welcome, person!"', () => {
    expect(welcomePerson).toEqual('welcome, person')
  })
})

describe('getWelcomeMessage', () => {
  it('equals welcomePerson', () => {
    const message: string = getWelcomeMessage()
    expect(message).toEqual(welcomePerson)
    expect(message).toEqual('welcome, person')
  })
})
