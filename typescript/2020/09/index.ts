import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const input = INPUT_FILE.split('\r\n').map(x => Number(x));

const findSolutionOne = (numbers: number[]): number => {
    let found = false;
    let firstNum: number = 0;
    numbers.slice(25, numbers.length - 1).forEach((num, index) => {
        const before = numbers.slice(index, index + 25);
        let solutions: Array<number>[] = [];
        before.forEach(x => {
            before.forEach(y => {
                if(x + y == num) solutions.push([x, y]);
            });
        });
        if(found == false && solutions.length < 1){
            found = true;
            firstNum = num;
        }
    });
    return firstNum;
}

const findSolutionTwo = (numbers: number[], firstNum: number): number => {
    let secondNum: number = 0;
    numbers.forEach((num, index) => {
        numbers.slice(index + 1, numbers.length - 1).forEach((subNum, subIndex) => {
            let nums: number[] = numbers.slice(index + 1, index + 2 + subIndex);
            if(nums.reduce((a, b) => a + b) == firstNum){
                if(secondNum == 0) secondNum = Math.max(...nums) + Math.min(...nums);
            }
        });
    });
    return secondNum;
}

console.log(`Solution 1: ${findSolutionOne(input)}`);
console.log(`Solution 2: ${findSolutionTwo(input, findSolutionOne(input))}`);