import * as fs from 'fs';
import * as path from 'path';

const INPUT_FILE = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const input: InstructionPair[] = INPUT_FILE.split('\n').map(x => {
    return { instruction: x[0] as InstructionType, value: parseInt(x.substr(1, x.length - 1)) }
});

enum InstructionType {
    NORTH = 'N',
    SOUTH = 'S',
    EAST = 'E',
    WEST = 'W',
    LEFT = 'L',
    RIGHT = 'R',
    FORWARD = 'F'
}

interface InstructionPair {
    instruction: InstructionType,
    value: number
}

const findSolutionOne = (instructions: InstructionPair[]) => {
    let x = 0, y = 0;
    let rotation = 0;

    const findNewRotation = (currentRotation: number, rotatingBy: number): number => {
        return (currentRotation + rotatingBy >= 360 ? currentRotation + rotatingBy - 360 : currentRotation + rotatingBy < 0 ? currentRotation + rotatingBy + 360 : currentRotation + rotatingBy);
    }

    const move = (instruct: InstructionPair) => {
        switch(instruct.instruction) {
            case InstructionType.NORTH:
                y += instruct.value; break;
            case InstructionType.SOUTH:
                y -= instruct.value; break;
            case InstructionType.EAST:
                x += instruct.value; break;
            case InstructionType.WEST:
                x -= instruct.value; break;
            case InstructionType.LEFT:
                rotation = findNewRotation(rotation, 0-instruct.value); break;
            case InstructionType.RIGHT:
                rotation = findNewRotation(rotation, instruct.value); break;
            case InstructionType.FORWARD:
                switch(rotation) {
                    case 270:
                        move({instruction: InstructionType.NORTH, value: instruct.value}); break;
                    case 180:
                        move({instruction: InstructionType.WEST, value: instruct.value}); break;
                    case 90:
                        move({instruction: InstructionType.SOUTH, value: instruct.value}); break;
                    case 0:
                        move({instruction: InstructionType.EAST, value: instruct.value}); break;
                } break;
        }
    }

    instructions.forEach(instruct => {
        move(instruct);
    });

    return Math.abs(x) + Math.abs(y);
}

console.log(`Solution 1: ${findSolutionOne(input)}`);