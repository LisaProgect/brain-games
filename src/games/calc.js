import run from '../index.js';
import getRandomNumber from '../random-helper.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '/', '*'];

const calculateExpression = (operator, leftOperand, rightOperand) => {
    switch (operator) {
        case '+':
            return leftOperand + rightOperand;
        case '-':
            return leftOperand - rightOperand;
        case '*':
            return leftOperand * rightOperand;
        case '/':
            return leftOperand / rightOperand;
        default:
            return false;
    }
};

const getRoundData = () => {
    const leftOperand = getRandomNumber(1, 100);
    const rightOperand = getRandomNumber(1, 100);
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `${leftOperand} ${operator} ${rightOperand}`;
    const correctAnswer = `${calculateExpression(
        operator,
        leftOperand,
        rightOperand
    )}`;
    return { correctAnswer, question };
};
export default () => run(description, getRoundData);
