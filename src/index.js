//logic for games
//общая для всех игр логика
//приветствие
//запрос имени
//итерация по раундам
//сравнение
//правильный ответ
//неправильный ответ
//завершение игры

//Есть ядро программы: src/index.js - 
// внутри функция, которая принимает подготовленные данные: 
// правила игры и функцию подготовки данных, которая возвращает массив [question, correctAnswer]?
import readlineSync from 'readline-sync';

const runGame = (gameDescription, generateQuestionAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(gameDescription);

//пишу цикл с массивом 
for (let i = 0; i < 3; i++) {
    const round = generateQuestionAndAnswer();
    const question = round.question;
    const correctAnswer = round.answer;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
    }
}
console.log(`Congratulations, ${userName}!`);
}

export default runGame;