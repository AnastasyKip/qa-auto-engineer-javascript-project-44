import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

function makeRound() {
  const randomNumber = getRandomNumber(1, 100)
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
  const question = String(randomNumber)
  return { question, answer: correctAnswer }
}

export default function startEvenGame() {
  runGame(description, makeRound)
}
