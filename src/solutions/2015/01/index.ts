import input from './input';

export const parseInput = () => input.split('');

export const findSolutionOne = (input: string[]): number => {
	let floor = 0;
	input.forEach(x => {
		floor += x == '(' ? 1 : -1;
	});
	return floor;
};

export const findSolutionTwo = (input: string[]): number => {
	let char: number;
	let floor = 0;
	input.forEach((x, i) => {
		if (!char) {
			floor += x == '(' ? 1 : -1;
			if (floor == -1) char = i + 1;
		}
	});
	return char!;
};
