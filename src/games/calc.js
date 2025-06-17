import runGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
};

const generateQuestionAndAnswer = () => {
    const number1 = Math.floor(Math.random() * 30) + 1;
    const number2 = Math.floor(Math.random() * 30) + 1;
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[randomIndex];

    let correctAnswer;
    if (operator === '+') {
        correctAnswer = number1 + number2;
    } else if (operator === '-') {
        correctAnswer = number1 - number2;
    } else if (operator === '*') {
        correctAnswer = number1 * number2;
    }

    const question = `${number1} ${operator} ${number2}`;

    const result = {
        question: question,
        answer: String(correctAnswer),
    };

    return result;

}
export default function startCalcGame() {
    runGame(description, generateQuestionAndAnswer);
}