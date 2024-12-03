import input from './input';

export const parseInput = () => input;

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const regex = /mul\((\d+),(\d+)\)/gm;

	const matches = input.match(regex)!;

	let total = 0;
	matches.forEach(match => {
		const [num1, num2] = match.replace('mul(', '').replace(')', '').split(',');

		total += +num1 * +num2;
	});

	return total;
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const regex = /(mul\((\d+),(\d+)\)|do\(\)|don't\(\))/gm;

	const matches = input.match(regex)!;

	let total = 0;
	let enabled = true;
	matches.forEach(match => {
		if (match.startsWith("don't")) {
			enabled = false;
		} else if (match.startsWith('do')) {
			enabled = true;
		} else if (enabled) {
			const [num1, num2] = match
				.replace('mul(', '')
				.replace(')', '')
				.split(',');

			total += +num1 * +num2;
		}
	});

	return total;
};

export { input };
