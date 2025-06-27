import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const description
= 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n <= 1) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

const makeRound = () => {
  const number = getRandomNumber(1, 100)
  const question = `${number}`
  const answer = isPrime(number) ? 'yes' : 'no'

  return { question, answer }
}

export default function startPrimeGame() {
  runGame(description, makeRound)
}
