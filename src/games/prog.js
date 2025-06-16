import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateQuestionAndAnswer = () => {
    const step = Math.floor(Math.random() * 5) + 1;
    const start = Math.floor(Math.random() * 10) + 1;
    const progressionLength = 10;
    const progression = [];
    for (let i = 0; i < progressionLength; i++) {
        progression.push(start + i * step)
    }
    const hiddenItem = Math.floor(Math.random() * progressionLength);
    const correctAnswer = progression[hiddenItem];
    progression[hiddenItem] = '..';
    const question = progression.join(' ');
    return {
        question,
        answer: String(correctAnswer)
    };
};

export default function startProgressionGame () {
    runGame (description, generateQuestionAndAnswer);
}

// const range = (step) => {
//         let range = [];
//         let start = Math.floor(Math.random() * 10) + 1;
//         for (let i = 0; i < 10; i++) {
//             let currentElement = start + i * step;
//             range.push(currentElement);
//         }
//         return range;
// }
// console.log(range (3));

