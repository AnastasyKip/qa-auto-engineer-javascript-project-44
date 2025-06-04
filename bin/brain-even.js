#!/usr/bin/env node
/* eslint-env node */

import readlineSync from 'readline-sync';

//greetings
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// Checking even
function isEven(num) {
  return num % 2 === 0;
}

// The Game
for (let i = 0; i < 3; i++) {
    const number = getRndInteger(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        process.exit(1);
    }
}

console.log(`Congratulations, ${userName}!`);


