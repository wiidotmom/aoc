import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const findSolutionOne = (rows: string[][]): number => {
    const processRows = (input: string[][]): string[][] => {
        let newRows = JSON.parse(JSON.stringify(input));
    
        const getAdjacentOccupied = (x: number, y: number): number => {
            let adjacent: string[] = [];
    
            [
                (input[y] || [])[x - 1] || undefined,
                (input[y] || [])[x + 1] || undefined,
                (input[y + 1] || [])[x - 1] || undefined,
                (input[y + 1] || [])[x] || undefined,
                (input[y + 1] || [])[x + 1] || undefined,
                (input[y - 1] || [])[x - 1] || undefined,
                (input[y - 1] || [])[x] || undefined,
                (input[y - 1] || [])[x + 1] || undefined
            ].forEach(seat => {
                if(seat == '#') adjacent.push(seat);
            });
    
            return adjacent.length;
        }
    
        input.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                if(seat == 'L' && getAdjacentOccupied(seatIndex, rowIndex) == 0) newRows[rowIndex][seatIndex] = '#';
                if(seat == '#' && getAdjacentOccupied(seatIndex, rowIndex) >= 4) newRows[rowIndex][seatIndex] = 'L';
            });
        });
    
        return newRows;
    }
    
    let newR: string[][] = JSON.parse(JSON.stringify(rows));
    let currentR: string[][] = JSON.parse(JSON.stringify(rows));
    while(true){
        currentR = JSON.parse(JSON.stringify(newR));
        newR = JSON.parse(JSON.stringify(processRows(currentR)));
        if(JSON.stringify(newR) == JSON.stringify(currentR)) break;
    }
    
    let occupied = 0;

    newR.forEach(row => {
        occupied += row.filter(x => x == '#').length;
    });

    return occupied;
}

const findSolutionTwo = (rows: string[][]): number => {
    const processRows = (input: string[][]): string[][] => {
        let newRows = JSON.parse(JSON.stringify(input));

        interface Vector2D {
            x: number,
            y: number
        }

        const DIRECTIONS = [
            (x: number, y: number): Vector2D => { return {x: x - 1, y: y - 1} },
            (x: number, y: number): Vector2D => { return {x: x + 0, y: y - 1} },
            (x: number, y: number): Vector2D => { return {x: x + 1, y: y - 1} },
            (x: number, y: number): Vector2D => { return {x: x - 1, y: y + 0} },
            (x: number, y: number): Vector2D => { return {x: x + 1, y: y + 0} },
            (x: number, y: number): Vector2D => { return {x: x - 1, y: y + 1} },
            (x: number, y: number): Vector2D => { return {x: x + 0, y: y + 1} },
            (x: number, y: number): Vector2D => { return {x: x + 1, y: y + 1} },
        ]

        const getSeat = (x: number, y: number): string | undefined => {
            try {
                return input[y][x];
            } catch(err) {
                return undefined;
            }
        }

        const getAdjacentOccupied = (x: number, y: number): number => {
            let adjacent: string[] = [];
    
            DIRECTIONS.forEach(direction => {
                let spot: string | undefined = '.';
                let newX: number = Number(x);
                let newY: number = Number(y);
                while(spot == '.'){
                    let newLoc = direction(newX, newY);
                    newX = newLoc.x;
                    newY = newLoc.y;
                    spot = getSeat(newX, newY);
                }
                if(spot == '#') adjacent.push(spot);
            });
    
            return adjacent.length;
        }

        input.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                if(seat == '#' && getAdjacentOccupied(seatIndex, rowIndex) >= 5) newRows[rowIndex][seatIndex] = 'L';
                if(seat == 'L' && getAdjacentOccupied(seatIndex, rowIndex) == 0) newRows[rowIndex][seatIndex] = '#';
            });
        });

        return newRows;
    }

    let newR: string[][] = JSON.parse(JSON.stringify(rows));
    let currentR: string[][] = JSON.parse(JSON.stringify(rows));
    while(true){
        currentR = JSON.parse(JSON.stringify(newR));
        newR = JSON.parse(JSON.stringify(processRows(currentR)));
        if(JSON.stringify(newR) == JSON.stringify(currentR)) break;
    }
    
    let occupied = 0;

    newR.forEach(row => {
        occupied += row.filter(x => x == '#').length;
    });

    return occupied;
}

console.log(`Solution 1: ${findSolutionOne(INPUT_FILE.split('\r\n').map(x => x.split('')))}`);
console.log(`Solution 2: ${findSolutionTwo(INPUT_FILE.split('\r\n').map(x => x.split('')))}`);