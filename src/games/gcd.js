import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const description = 'Find the greatest common divisor of given numbers.'

const findGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return findGcd(b, a % b)
}

const makeRound = () => {
  let number1 = getRandomNumber(1, 30)
  let number2 = getRandomNumber(1, 30)
  const question = `${number1} ${number2}`
  const answer = String(findGcd(number1, number2))
  return { question, answer }
}

export default function startGcdGame() {
  runGame(description, makeRound)
}
