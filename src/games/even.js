import run from '../index.js';
import getRandomNumber from '../random-helper.js';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { correctAnswer, question };
};

export default () => run(description, getRoundData);
