import run from '../index.js';
import getRandomNumber from '../random-helper.js';

const description =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, counter = 2) => {
    if (number === 2) {
        return true;
    }
    if (number < 2 || number % counter === 0) {
        return false;
    }
    return counter > number / 2 || isPrime(number, counter + 1);
};

const getRoundData = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { correctAnswer, question };
};
export default () => run(description, getRoundData);
