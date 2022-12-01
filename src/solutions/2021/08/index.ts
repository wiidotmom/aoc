import { getPermutationsOfArray } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let easyDigits: number = 0;

	input.forEach(line => {
		line
			.split(' | ')[1]
			.split(' ')
			.forEach(segmentData => {
				if ([2, 3, 4, 7].includes(segmentData.length)) easyDigits++;
			});
	});

	return easyDigits;
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const unmapped = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	const permutations = getPermutationsOfArray<string>(unmapped);

	const originalSegments = [
		'abcefg',
		'cf',
		'acdeg',
		'acdfg',
		'bcdf',
		'abdfg',
		'abdefg',
		'acf',
		'abcdefg',
		'abcdfg',
	];

	const correctOutputs = input.map(line => {
		const [inputSegments, outputSegments] = line
			.split(' | ')
			.map(x => x.split(' '));

		const map = (segments: string, permutatedSegment: string[]) =>
			segments
				.split('')
				.map(segment => unmapped[permutatedSegment.indexOf(segment)])
				.sort()
				.join('');

		const correct = permutations.find(permutation =>
			inputSegments
				.map(segments => map(segments, permutation))
				.every(segments => originalSegments.includes(segments))
		);

		return outputSegments.map(segments =>
			originalSegments.indexOf(map(segments, correct!))
		);
	});

	return correctOutputs.map(x => parseInt(x.join(''))).reduce((a, b) => a + b);
};
