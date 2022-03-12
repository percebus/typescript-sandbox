import { getWelcomeMessage } from './getWelcomeMessage'
import welcomePerson from './welcomePerson'


test('should show welcome message', () => {
    expect(getWelcomeMessage()).toMatchInlineSnapshot(`"Welcome to ts-jest!!!"`)
})

test('should show welcome person message', () => {
    // @ts-expect-error in ESM mode, `default` is kept after compilation
    expect(welcomePerson.default ? welcomePerson.default : welcomePerson).toMatchInlineSnapshot(`"Welcome to ts-jest!!!"`)
})
