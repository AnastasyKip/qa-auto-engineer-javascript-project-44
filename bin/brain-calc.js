#!/usr/bin/env node
/* eslint-env node */

//ОСТАВИТЬ ТУТ ТОЛЬКО ВЫЗОВ И ИМПОРТ
//УНИКАЛЬНОЕ - ПОДГОТОВКА ВОПРОСОВ И ОТВЕТОВ
//импорт из src/games + вызов функции игры.

import runGame from "../src/index.js";
import generateQuestionAndAnswer from "../src/games/calc.js";

const description = 'What is the result of the expression?';

runGame(description, generateQuestionAndAnswer);