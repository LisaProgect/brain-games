import readlineSync from 'readline-sync';
import chalk from 'chalk';

const roundsCount = 3;

export default (description, game) => {
    console.log(chalk.cyanBright('Welcome to the Brain Games!'));
    console.log(chalk.blueBright(`Description: ${description}`));
    const userName = readlineSync.question('May I have you name? ');
    console.log(`Hello, ${userName}!`);

    const playGame = (round = 0) => {
        if (round >= roundsCount) {
            return console.log(chalk.yellow(`Congratulations, ${userName}!`));
        }
        const { correctAnswer, question } = game();
        console.log(chalk.yellow(`Question: ${question}`));
        const userAnswer = readlineSync.question('Your answer: ');
        if (correctAnswer !== userAnswer) {
            console.log(chalk.red('You answer is wrong'));
            console.log(`Correct answer was: ${correctAnswer}`);
            return console.log(chalk.cyan("Let's try again!"));
        }
        console.log('Your answer is correct!');
        return playGame(round + 1);
    };
    return playGame();
};
