import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let total = 0;

	input.forEach(x => {
		const { length, width, height } = {
			length: parseInt(x.split('x')[0]),
			width: parseInt(x.split('x')[1]),
			height: parseInt(x.split('x')[2]),
		};

		const side1 = length * width;
		const side2 = width * height;
		const side3 = length * height;
		const smallestSide = Math.min(side1, side2, side3);

		total += 2 * side1 + 2 * side2 + 2 * side3 + smallestSide;
	});

	return total;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let total = 0;

	input.forEach(x => {
		const { length, width, height } = {
			length: parseInt(x.split('x')[0]),
			width: parseInt(x.split('x')[1]),
			height: parseInt(x.split('x')[2]),
		};

		const side1 = 2 * length + 2 * width;
		const side2 = 2 * width + 2 * height;
		const side3 = 2 * length + 2 * height;

		const smallestSide = Math.min(side1, side2, side3);
		const volume = length * width * height;

		total += smallestSide + volume;
	});

	return total;
};

export { default as input } from './input';
