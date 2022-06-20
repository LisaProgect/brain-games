import run from '../index.js';
import getRandomNumber from '../random-helper.js';

const description = 'What number is missing in the progression?';

const getProgression = (
    start,
    step,
    length = getRandomNumber(5, 10),
    counter = 0,
    acc = []
) =>
    counter === length
        ? acc
        : getProgression(start, step, length, counter + 1, [
            ...acc,
            start + counter * step,
        ]);

const getRoundData = () => {
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    const progression = getProgression(start, step);
    const hiddenKey = getRandomNumber(0, progression.length - 1);
    const question = progression
        .map((currentValue, index) =>
            index === hiddenKey ? '..' : currentValue
        )
        .join(' ');
    const correctAnswer = `${progression[hiddenKey]}`;
    return { correctAnswer, question };
};

export default () => run(description, getRoundData);
