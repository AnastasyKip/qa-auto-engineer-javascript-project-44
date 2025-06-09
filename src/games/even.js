//импорт из src/index.js + индивидуальная логика для каждой игры.

import runGame from "../index.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function generateQuestionAndAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    let correctAnswer;
    if (randomNumber % 2 === 0) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    }
    const question = String(randomNumber);

    const result = {
        question: question,
        answer: correctAnswer 
    };
    return result;
};

export default function startEvenGame() {
    runGame(description, generateQuestionAndAnswer);
}