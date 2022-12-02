import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let myScore = 0;

	const scoreValues = {
		A: {
			X: 1 + 3,
			Y: 2 + 6,
			Z: 3 + 0,
		},
		B: {
			X: 1 + 0,
			Y: 2 + 3,
			Z: 3 + 6,
		},
		C: {
			X: 1 + 6,
			Y: 2 + 0,
			Z: 3 + 3,
		},
	};

	input.forEach(round => {
		const [them, me] = round.split(' ') as ['A' | 'B' | 'C', 'X' | 'Y' | 'Z'];

		myScore += scoreValues[them][me];
	});

	return myScore;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let myScore = 0;

	const scoreValues = {
		A: {
			X: 3 + 0,
			Y: 1 + 3,
			Z: 2 + 6,
		},
		B: {
			X: 1 + 0,
			Y: 2 + 3,
			Z: 3 + 6,
		},
		C: {
			X: 2 + 0,
			Y: 3 + 3,
			Z: 1 + 6,
		},
	};

	input.forEach(round => {
		const [them, me] = round.split(' ') as ['A' | 'B' | 'C', 'X' | 'Y' | 'Z'];

		myScore += scoreValues[them][me];
	});

	return myScore;
};
