import readlineSync from 'readline-sync'

const roundsCount = 3

const runGame = (gameDescription, makeRound) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(gameDescription)

  for (let i = 0; i < roundsCount; i++) {
    const round = makeRound()
    const question = round.question
    const correctAnswer = round.answer

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
