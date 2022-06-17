import * as fs from 'node:fs';
import path from 'node:path';
import readlineSync from 'readline-sync';
import chalk from 'chalk';

const pathCurrDir = path.join('src', 'games');

const getFileNamesCurrDir = () => {
    try {
        const filesNamesInDir = fs.readdirSync(pathCurrDir);
        return filesNamesInDir.filter((fileName) => fileName !== 'index.js');
    } catch (error) {
        console.error(error);
    }
    return [];
};

const chooseGame = (gameNames) => {
    console.log(chalk.blue('What kind of game do you want to play:'));
    return readlineSync.keyInSelect(
        gameNames.map((gameName) => `Game - ${gameName}`),
        chalk.green('Which Game?')
    );
};

const getGameNames = (filesNames) =>
    filesNames.map((fileName) => path.basename(fileName));

export default () => {
    const filesNames = getFileNamesCurrDir();
    const gameNames = getGameNames(filesNames);
    const pathForImport = `./${filesNames[chooseGame(gameNames)]}`;
    import(pathForImport)
        .then((game) => game.default())
        .catch((err) => console.log(err));
};
