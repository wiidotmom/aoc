import input from './input';

export const parseInput = () => input.split(',').map(x => parseInt(x));

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	const min = Math.min(...input),
		max = Math.max(...input);

	let cheapest: number;
	Array.from(Array(max - min)).forEach((x, i) => {
		const cost = input.map(y => Math.abs(i + min - y)).reduce((a, b) => a + b);
		if (cost < cheapest || !cheapest) cheapest = cost;
	});

	return cheapest!;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const min = Math.min(...input),
		max = Math.max(...input);

	const tri = (n: number) => (n * (n + 1)) / 2;

	let cheapest: number;
	Array.from(Array(max - min)).forEach((x, i) => {
		const cost = input
			.map(y => tri(Math.abs(i + min - y)))
			.reduce((a, b) => a + b);
		if (cost < cheapest || !cheapest) cheapest = cost;
	});

	return cheapest!;
};

export { default as input } from './input';
