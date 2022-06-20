import run from '../index.js';
import getRandomNumber from '../random-helper.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));
const getRoundData = () => {
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = `${getGcd(firstNumber, secondNumber)}`;
    return { correctAnswer, question };
};
export default () => run(description, getRoundData);
