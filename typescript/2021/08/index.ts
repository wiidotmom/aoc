import fs from 'fs';
import path from 'path';

import { getPermutationsOfArray } from 'utils';

const INPUT_FILE = fs
	.readFileSync(path.join(__dirname, 'input.txt'))
	.toString();

const findSolutionOne = (input: string[]): number => {
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

const findSolutionTwo = (input: string[]): number => {
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

const data = INPUT_FILE.split('\n');
console.log(`Solution 1: ${findSolutionOne(data)}`);
console.log(`Solution 2: ${findSolutionTwo(data)}`);
