
/* MASTERMIND
 *
 * Create a function that evaluates a guess. Create a single function that has two parameters:
 *   - ‘secret’
 *   - ‘guess’.
 *
 * The function should evaluate the guess against the secret and provide feedback for player one to use for his next guess.
 * The function will return two integers based on the following guidelines.
 *
 * Feedback Guidelines:
 *   1. The first integer in the feedback represents the count of correct digits in the correct location
 *   2. The second integer in the feedback represents the count of correct digits in the wrong location
 *   3. The digits matched in guideline #1 should not be available in the count for guideline #2
 */

export type correctTuple = [number, number]

export const evaluate = (secret: string, guess: string): correctTuple => {
  console.log('guessSecret', [secret, guess])
  const secrets: string[] = secret.split('')
  const guesses: string[] = guess.split('')

  const _secrets: string[] = []
  const _guesses: string[] = []

  // TODO Simplify! Avoid doing 2 trips
  let rightLocation: number = 0
  for (let i: number = 0, len: number = secrets.length; i < len; i++) { // TODO? .forEach ?
    const s: string = secrets[i]
    const g: string = guesses[i]
    if (s === g) {
      rightLocation += 1
    } else {
      _secrets.push(s)
      _guesses.push(g)
    }
  }

  let wrongLocation: number = 0
  _guesses.forEach((g: string) => {
    if (_secrets.includes(g)) {
      wrongLocation += 1
    }
  })

  return [rightLocation, wrongLocation]
}
