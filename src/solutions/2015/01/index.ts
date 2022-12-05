import input from './input';

export const parseInput = () => input.split('');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let floor = 0;
	input.forEach(x => {
		floor += x == '(' ? 1 : -1;
	});
	return floor;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
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

export { default as input } from './input';
