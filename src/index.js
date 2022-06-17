import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, game) => {
    console.log('Welcome to the Brain Games!');
    console.log(`Description: ${description}`);
    const userName = readlineSync.question('May I have you name? ');
    console.log(`Hello, ${userName}!`);

    const playGame = (round = 0) => {
        if (round >= roundsCount) {
            return console.log(`Congratulations, ${userName}!`);
        }
        const { correctAnswer, question } = game();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (correctAnswer !== userAnswer) {
            console.log('You answer is wrong');
            console.log(`Correct answer was: ${correctAnswer}`);
            return console.log("Let's try again!");
        }
        console.log('Your answer is correct!');
        return playGame(round + 1);
    };
    return playGame();
};
