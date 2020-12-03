import * as fs from 'fs';
import * as path from 'path';

class Vector2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number){
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(newX: number) {
        this._x = newX;
    }

    get y(): number {
        return this._y;
    }

    set y(newY: number) {
        this._y = newY;
    }
}

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const getTreesFromSlope = (X_SLOPE: number, Y_SLOPE: number): number => {
    let pos = new Vector2D(0, 0);
    let trees = 0;

    while(pos.y < input.length){
        if(input[pos.y][pos.x] == '#') trees++;

        pos.x = (pos.x + X_SLOPE) % (input[0].length - 1);
        pos.y = pos.y + Y_SLOPE;
    }

    return trees;
}

const input = INPUT_FILE.split('\n');

const findSolutionOne = (): number => getTreesFromSlope(3, 1);

const findSolutionTwo = (): number => getTreesFromSlope(1, 1) * getTreesFromSlope(3, 1) * getTreesFromSlope(5, 1) * getTreesFromSlope(7, 1) * getTreesFromSlope(1, 2);

console.log(`Solution 1: ${findSolutionOne()}`);
console.log(`Solution 2: ${findSolutionTwo()}`);