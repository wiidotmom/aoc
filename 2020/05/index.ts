import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const input = INPUT_FILE.split('\r\n');

const getSeatId = (pass: string): number => {
    const CHAR_DIFFS: any = { B: '1', F: '0', R: '1', L: '0' };
    return parseInt(pass.split('').map(x => CHAR_DIFFS[x]).join(''), 2); // concatenate differences, convert from base 2 to base 10 integer
}

const findSolutionOne = (passes: string[]): number => {
    let seatIds: number[] = [];

    passes.forEach(pass => seatIds.push(getSeatId(pass)));

    return Math.max(...seatIds);
}

const findSolutionTwo = (passes: string[]): number => {
    let seatIds: number[] = [];

    passes.forEach(pass => seatIds.push(getSeatId(pass)));

    let seat = 0;
    for(let seatCount = Math.min(...seatIds); seatCount < Math.max(...seatIds); seatCount++){
        if(!seatIds.includes(seatCount)) seat = seatCount;
    }
    return seat;
}

console.log(`Solution 1: ${findSolutionOne(input)}`);
console.log(`Solution 2: ${findSolutionTwo(input)}`);