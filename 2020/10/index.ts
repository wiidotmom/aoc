import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const input = INPUT_FILE.split('\r\n').map(x => Number(x));

const findSolutionOne = (adapts: number[]): number => {
    let adapters = [...adapts];
    adapters.sort((x, y) => x - y);

    let deviceRating = Math.max(...adapters) + 3;

    let oneDifferences = 0;
    let threeDifferences = 0;

    let currentJoltage = 0;

    while(!(currentJoltage >= deviceRating - 3 && currentJoltage <= deviceRating)){
        let workingAdapter = [currentJoltage + 1, currentJoltage + 2, currentJoltage + 3].find(x => adapters.includes(x)) || currentJoltage;
        if(workingAdapter - currentJoltage == 1) oneDifferences ++;
        if(workingAdapter - currentJoltage == 3) threeDifferences ++;

        currentJoltage = workingAdapter;
    }
    threeDifferences ++;

    return oneDifferences * threeDifferences;
}

const findSolutionTwo = (adapts: number[]): number => {
    let adapters = [...adapts];
    adapters.sort((x, y) => x - y);
    adapters = [0, ...adapters, Math.max(...adapters) + 3];

    // Math can be such a pain sometimes
    const TRIBONACCI_SEQ = [1, 1, 2, 4, 7, 13, 24, 44, 81, 149];

    let run = 1;
    let total = 1;

    adapters.forEach(joltage => {
        if(adapters.includes(joltage + 1)){
            run ++;
        } else {
            total *= TRIBONACCI_SEQ[run - 1];
            run = 1;
        }
    });

    return total;
}

console.log(`Solution 1: ${findSolutionOne(input)}`);
console.log(`Solution 2: ${findSolutionTwo(input)}`);