import * as fs from 'fs';
import * as path from 'path';

const findSolutionOne = (input: number[]): number => {
    let solution = 0;
    input.forEach((entry, index) => {
        input.forEach((subEntry, subIndex) => {
            if(entry + subEntry == 2020) solution = entry * subEntry;
        });
    });
    return solution;
}

const findSolutionTwo = (input: number[]): number => {
    let solution = 0;
    input.forEach((entry, index) => {
        input.forEach((subEntry, subIndex) => {
            input.forEach((subSubEntry, subSubIndex) => {
                if(entry + subEntry + subSubEntry == 2020) solution = entry * subEntry * subSubEntry;
            });
        });
    });
    return solution;
}

let data = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().split('\n').map(x => Number(x));
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);