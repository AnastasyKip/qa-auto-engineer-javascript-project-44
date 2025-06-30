import runGame from '../index.js'
import getRandomNumber from '../utils/random.js'

const description = 'What is the result of the expression?'

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return null
  }
}

const makeRound = () => {
  const number1 = getRandomNumber(1, 30)
  const number2 = getRandomNumber(1, 30)
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  const operator = operators[randomIndex]

  const correctAnswer = calculate(number1, number2, operator)

  const question = `${number1} ${operator} ${number2}`

  return {
    question,
    answer: String(correctAnswer),
  }
}

export default function startCalcGame() {
  runGame(description, makeRound)
}
