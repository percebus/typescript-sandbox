import { guessSecret } from './guessSecret'

describe('MASTERMIND', () => {
  let feedback: [number, number] // tuple

  // TODO group in an object
  let rightLocation: number
  let wrongLocation: number

  describe('guessSecret(secret, guess)', () => {
    describe('secret', () => {
      describe('8520', () => {
        const secret = '8520'
        describe('guess', () => {
          beforeEach(() => {
            feedback = guessSecret(secret, '1111')
            rightLocation = feedback[0]
            wrongLocation = feedback[1]
          })

          describe('1111', () => {
            describe('correct location', () => {
              it('all numbers are incorrect', () => {
                expect(rightLocation).toBe(0)
              })
            })

            describe('wrong location', () => {
              it('all numbers are incorrect', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })

          describe('8520', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, secret) // on-purpose
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('all 4 "8520" numbers are correct', () => {
                expect(rightLocation).toBe(4)
              })
            })

            describe('wrong location', () => {
              it('there are no remaining numbers', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })

          describe('0258', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '0258')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('all numbers are incorrect', () => {
                expect(rightLocation).toBe(0)
              })
            })

            describe('wrong location', () => {
              it('all 4 "0258" numbers are correct, but in the wrong location', () => {
                expect(wrongLocation).toBe(4)
              })
            })
          })

          describe('8888', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '8888')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('first "8" is correct', () => {
                expect(rightLocation).toBe(1)
              })
            })

            describe('wrong location', () => {
              it('the rest of the numbers are wrong', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })

          describe('8151', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '8151')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('first "8" is correct', () => {
                expect(rightLocation).toBe(1)
              })
            })

            describe('wrong location', () => {
              it('"5" is correct, but in the wrong location', () => {
                expect(wrongLocation).toBe(1)
              })
            })
          })

          describe('8502', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '8502')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('"85" are correct', () => {
                expect(rightLocation).toBe(2)
              })
            })

            describe('wrong location', () => {
              it('"02" are correct, but in the wrong location ("20")', () => {
                expect(wrongLocation).toBe(2)
              })
            })
          })

          describe('8820', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '8820')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('"8_20" are correct', () => {
                expect(rightLocation).toBe(3)
              })
            })

            describe('wrong location', () => {
              it('has no numbers', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })

          describe('4520', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '4520')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('"_520" are correct', () => {
                expect(rightLocation).toBe(3)
              })
            })

            describe('wrong location', () => {
              it('has no numbers', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })
        })
      })

      describe('8181', () => {
        const secret = '8181'
        describe('guess', () => {
          describe('8000', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '8000')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('"8___" is correct', () => {
                expect(rightLocation).toBe(1)
              })
            })

            describe('wrong location', () => {
              it('has no numbers', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })
        })
      })

      describe('8580', () => {
        const secret = '8580'
        describe('guess', () => {
          describe('8820', () => {
            beforeEach(() => {
              feedback = guessSecret(secret, '8820')
              rightLocation = feedback[0]
              wrongLocation = feedback[1]
            })

            describe('correct location', () => {
              it('"8__0" are correct', () => {
                expect(rightLocation).toBe(2)
              })
            })

            describe('wrong location', () => {
              it('is correct, but "_8__" goes "__8_"', () => {
                expect(wrongLocation).toBe(1)
              })
            })
          })
        })
      })
    })
  })
})
