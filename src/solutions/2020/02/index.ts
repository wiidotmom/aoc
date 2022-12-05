import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let valids = 0;
	input.forEach(line => {
		const sides = line.split(':');
		const password = sides[1].trim();
		const letter = sides[0].split(' ')[1];
		const minimum = Number(sides[0].split(' ')[0].split('-')[0]);
		const maximum = Number(sides[0].split(' ')[0].split('-')[1]);
		const count = password.split(letter).length - 1;
		if (count >= minimum && count <= maximum) valids++;
	});
	return valids;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let valids = 0;
	input.forEach(line => {
		const sides = line.split(':');
		const password = sides[1].trim();
		const letter = sides[0].split(' ')[1];
		const firstPos = Number(sides[0].split(' ')[0].split('-')[0]);
		const secondPos = Number(sides[0].split(' ')[0].split('-')[1]);
		if (
			(password.charAt(firstPos - 1) == letter &&
				password.charAt(secondPos - 1) != letter) ||
			(password.charAt(firstPos - 1) != letter &&
				password.charAt(secondPos - 1) == letter)
		)
			valids++;
	});
	return valids;
};

export { default as input } from './input';
