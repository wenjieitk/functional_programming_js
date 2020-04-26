const R = require('ramda')
const expect = require('expect')

const greet = R.curry((greeting, name) => `${greeting} ${name}`)
console.log(greet('good morning', 'Sing' ))

/** partial function */
const morningGreeting = greet('Top of the morning to ya')
console.log(morningGreeting('Ling'))

/** compose function */
const sentence = 'If you want to trigger the configuration wizard immediately, simply run p10k configure to discover all options, which are plentiful.'

//compose works from right to left
const countWords = R.compose(R.length, R.split(' '))
console.log(countWords(sentence))

//pipe works from left to right
const countWords2 = R.pipe(R.split(' '), R.length)
console.log(countWords2(sentence))


/** Test */
// Count how many digits there are in the following sentence, using functional composition

const sentence2 = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const numbersInString = R.pipe(
    R.split(''),
    R.map(parseInt),
    R.filter(Number.isInteger),
    R.length
)
console.log(numbersInString(sentence2))

expect(numbersInString(sentence2)).toBe(7)