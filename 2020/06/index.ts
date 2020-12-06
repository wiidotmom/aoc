import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const findSolutionOne = (groups: Array<string>[]): number => {
    let sum: number = 0;
    groups.forEach(group => {
        let answered: string[] = [];
        group.forEach(person => {
            person.split('').forEach(char => {
                if(!answered.includes(char)) answered.push(char);
            });
        });
        sum += answered.length;
    });
    return sum;
}

const findSolutionTwo = (groups: Array<string>[]): number => {
    let sum: number = 0;
    groups.forEach(group => {
        let answered: string[] = [];
        group.forEach(person => {
            person.split('').forEach(char => {
                if(!answered.includes(char) && group.every(per => per.includes(char))) answered.push(char);
            });
        });
        sum += answered.length;
    });
    return sum;
}

const input = INPUT_FILE.split('\r\n\r\n').map(x => x.split('\r\n'));

console.log(`Solution 1: ${findSolutionOne(input)}`);
console.log(`Solution 2: ${findSolutionTwo(input)}`);