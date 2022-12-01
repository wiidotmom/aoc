import input from './input';

import { Vec2d } from 'utils';

enum InstructionType {
	NORTH = 'N',
	SOUTH = 'S',
	EAST = 'E',
	WEST = 'W',
	LEFT = 'L',
	RIGHT = 'R',
	FORWARD = 'F',
}

interface InstructionPair {
	instruction: InstructionType;
	value: number;
}

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const instructions = input.map(x => {
		return {
			instruction: x[0] as InstructionType,
			value: parseInt(x.substr(1, x.length - 1)),
		};
	});

	let x = 0,
		y = 0;
	let rotation = 0;

	const findNewRotation = (
		currentRotation: number,
		rotatingBy: number
	): number => {
		return currentRotation + rotatingBy >= 360
			? currentRotation + rotatingBy - 360
			: currentRotation + rotatingBy < 0
			? currentRotation + rotatingBy + 360
			: currentRotation + rotatingBy;
	};

	const move = (instruct: InstructionPair) => {
		switch (instruct.instruction) {
			case InstructionType.NORTH:
				y += instruct.value;
				break;
			case InstructionType.SOUTH:
				y -= instruct.value;
				break;
			case InstructionType.EAST:
				x += instruct.value;
				break;
			case InstructionType.WEST:
				x -= instruct.value;
				break;
			case InstructionType.LEFT:
				rotation = findNewRotation(rotation, 0 - instruct.value);
				break;
			case InstructionType.RIGHT:
				rotation = findNewRotation(rotation, instruct.value);
				break;
			case InstructionType.FORWARD:
				switch (rotation) {
					case 270:
						move({ instruction: InstructionType.NORTH, value: instruct.value });
						break;
					case 180:
						move({ instruction: InstructionType.WEST, value: instruct.value });
						break;
					case 90:
						move({ instruction: InstructionType.SOUTH, value: instruct.value });
						break;
					case 0:
						move({ instruction: InstructionType.EAST, value: instruct.value });
						break;
				}
				break;
		}
	};

	instructions.forEach(instruct => move(instruct));

	return Math.abs(x) + Math.abs(y);
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const instructions = input.map(x => {
		return {
			instruction: x[0] as InstructionType,
			value: parseInt(x.substr(1, x.length - 1)),
		};
	});

	let ship: Vec2d = { x: 0, y: 0 };
	let waypoint: Vec2d = { x: 10, y: 1 };

	/**
	 * https://stackoverflow.com/questions/2259476/rotating-a-point-about-another-point-2d
	 */
	const rotate = (origin: Vec2d, point: Vec2d, degrees: number): Vec2d => {
		const { x: cx, y: cy } = origin;
		const { x, y } = point;

		const rad = (Math.PI / 180) * degrees;
		const cos = Math.cos(rad),
			sin = Math.sin(rad);

		return {
			x: cos * (x - cx) + sin * (y - cy) + cx,
			y: cos * (y - cy) - sin * (x - cx) + cy,
		};
	};

	const move = ({ instruction, value }: InstructionPair) => {
		switch (instruction) {
			case InstructionType.NORTH:
				waypoint.y += value;
				break;
			case InstructionType.SOUTH:
				waypoint.y -= value;
				break;
			case InstructionType.EAST:
				waypoint.x += value;
				break;
			case InstructionType.WEST:
				waypoint.x -= value;
				break;
			case InstructionType.LEFT:
			case InstructionType.RIGHT:
				const { x: newX, y: newY } = rotate(
					{ x: 0, y: 0 },
					waypoint,
					instruction === InstructionType.LEFT ? -value : value
				);
				waypoint.x = Math.round(newX);
				waypoint.y = Math.round(newY);
				break;
			case InstructionType.FORWARD:
				ship.x += waypoint.x * value;
				ship.y += waypoint.y * value;
				break;
		}
	};

	instructions.forEach(instruct => move(instruct));

	return Math.abs(ship.x) + Math.abs(ship.y);
};
