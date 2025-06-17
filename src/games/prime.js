import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const isPrime = (n) => {
    if (n <= 1) {
        return false;
    } for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};


const generateQuestionAndAnswer = () => {
    let number = Math.floor(Math.random() * 100) + 1;
    const question = `${number}`;
    const answer = isPrime(number) ? 'yes' : 'no';
    return { question, answer };
}

export default function startPrimeGame () {
    runGame (description, generateQuestionAndAnswer);
}
