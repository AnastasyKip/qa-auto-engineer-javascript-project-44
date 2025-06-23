import runGame from '../index.js'
import getRandomNumber from '../utils/random.js';

const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const makeRound = () => {
  const step = getRandomNumber(1, 5)
  const start = getRandomNumber(1, 10)
  const progressionLength = 10
  
  const progression = generateProgression(start, step, progressionLength)

  const hiddenItem = getRandomNumber(0, progressionLength - 1)
  const correctAnswer = progression[hiddenItem]
  progression[hiddenItem] = '..'
  const question = progression.join(' ')

  return {
    question,
    answer: String(correctAnswer),
  }
}

export default function startProgressionGame() {
  runGame(description, makeRound)
}
