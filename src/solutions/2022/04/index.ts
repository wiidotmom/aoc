import input from './input';

export const parseInput = () =>
	input.split('\n').map(x =>
		x.split(',').map(y =>
			Array.from(Array(Math.max(+y.split('-')[1])).keys())
				.map(z => z + 1)
				.filter(z => z >= +y.split('-')[0])
		)
	);

export const findSolutionOne = (input: ReturnType<typeof parseInput>) =>
	input.filter(x =>
		x[0].every(y => x[1].includes(y) || x[1].every(y => x[0].includes(y)))
	).length;

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) =>
	input.filter(x =>
		x[0].some(y => x[1].includes(y) || x[1].some(y => x[0].includes(y)))
	).length;

export { default as input } from './input';
