import runGame from '../index.js'

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

const generateQuestionAndAnswer = () => {
  const number1 = Math.floor(Math.random() * 30) + 1
  const number2 = Math.floor(Math.random() * 30) + 1
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
  runGame(description, generateQuestionAndAnswer)
}
