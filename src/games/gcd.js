import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';


const findGcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return findGcd (b, a % b);
};

const generateQuestionAndAnswer = () => {
    // Safe usage of Math.random() in a non-security-critical context (educational CLI game)
    let number1 = Math.floor(Math.random() * 30) + 1;
    // Safe usage of Math.random() in a non-security-critical context (educational CLI game)
    let number2 = Math.floor(Math.random() * 30) + 1;
    const question = `${number1} ${number2}`;
    const answer = String(findGcd(number1, number2));
    return { question, answer };
}

export default function startGcdGame () {
    runGame (description, generateQuestionAndAnswer);
}