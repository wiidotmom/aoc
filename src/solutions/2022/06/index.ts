import input from './input';

export const parseInput = () => input;

const findPacketMarker = (
	input: ReturnType<typeof parseInput>,
	length: number
) => {
	for (let i = 0; i < input.length - length + 1; i++) {
		const chars = input.slice(i, i + length);
		if ([...chars].every(x => !chars.replace(x, '').includes(x)))
			return i + length;
	}
	return -1;
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) =>
	findPacketMarker(input, 4);

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) =>
	findPacketMarker(input, 14);

export { default as input } from './input';
