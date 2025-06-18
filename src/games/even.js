import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

function generateQuestionAndAnswer() {
  const randomNumber = Math.floor(Math.random() * 100)
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
  const question = String(randomNumber)
  return { question, answer: correctAnswer }
}

export default function startEvenGame() {
  runGame(description, generateQuestionAndAnswer)
}
