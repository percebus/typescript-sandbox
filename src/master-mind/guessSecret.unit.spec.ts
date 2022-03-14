import { correctTuple, evaluate } from './evaluate'

describe('MASTERMIND', () => {
  describe('guessSecret(secret, guess)', () => {
    let feedback: correctTuple

    // TODO group in an object
    let rightLocation: number
    let wrongLocation: number

    function setup (secret: string, guess: string) {
      return function () {
        feedback = evaluate(secret, guess)
        rightLocation = feedback[0]
        wrongLocation = feedback[1]
      }
    }

    describe('secret', () => {
      describe('8520', () => {
        const secret = '8520'
        describe('guess', () => {
          describe('1111', () => {
            beforeEach(setup(secret, '1111'))

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
            beforeEach(setup(secret, secret)) // on-purpose

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
            beforeEach(setup(secret, '0258'))

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
            beforeEach(setup(secret, '8888'))

            describe('correct location', () => {
              it('first "8___" is correct', () => {
                expect(rightLocation).toBe(1)
              })
            })

            describe('wrong location', () => {
              it('the rest of the numbers are wrong', () => {
                // the ‘8’ in guess positions 2, 3 and 4
                // should not refer the ‘8’ in secretposition 1
                expect(wrongLocation).not.toBe(3)
                expect(wrongLocation).toBe(0)
              })
            })
          })

          describe('8151', () => {
            beforeEach(setup(secret, '8151'))

            describe('correct location', () => {
              it('first "8__" is correct', () => {
                expect(rightLocation).toBe(1)
              })
            })

            describe('wrong location', () => {
              it('"__5_" is correct, but it goes "_5__"', () => {
                expect(wrongLocation).toBe(1)
              })
            })
          })

          describe('8502', () => {
            beforeEach(setup(secret, '8502'))

            describe('correct location', () => {
              it('"85__" are correct', () => {
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
            beforeEach(setup(secret, '8820'))

            describe('correct location', () => {
              it('"8_20" are correct', () => {
                expect(rightLocation).toBe(3)
              })
            })

            describe('wrong location', () => {
              it('"_8__" is wrong', () => {
                expect(wrongLocation).toBe(0)
              })
            })
          })

          describe('4520', () => {
            beforeEach(setup(secret, '4520'))

            describe('correct location', () => {
              it('"_520" are correct', () => {
                expect(rightLocation).toBe(3)
              })
            })

            describe('wrong location', () => {
              it('"4___" is wrong"', () => {
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
            beforeEach(setup(secret, '8000'))

            describe('correct location', () => {
              it('"8___" is correct', () => {
                expect(rightLocation).toBe(1)
              })
            })

            describe('wrong location', () => {
              it('the rest of the numbers are wrong', () => {
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
            beforeEach(setup(secret, '8820'))

            describe('correct location', () => {
              it('"8__0" are correct', () => {
                expect(rightLocation).toBe(2)
              })
            })

            describe('wrong location', () => {
              it('"_8__" is correct, but it goes "__8_"', () => {
                expect(wrongLocation).toBe(1)
              })
            })
          })
        })
      })
    })
  })
})
