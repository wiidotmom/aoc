import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	return sum(
		...input.map(x => {
			const digits = x.split('').filter(y => !Number.isNaN(+y));
			return +(digits[0] + digits[digits.length - 1]);
		})
	);
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	const digits = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];

	return sum(
		...input.map(x => {
			const digs = x.split('').filter(y => !Number.isNaN(+y));
			let firstDig = digs[0];
			let lastDig = digs[digs.length - 1];

			if (digits.some(y => x.includes(y))) {
				const firstWord = x.match(new RegExp(`/${digits.join('|')}/`));
				if (firstWord && firstWord.length > 0) {
					if (
						x.indexOf(firstWord[0]) < x.indexOf(firstDig) ||
						firstDig == undefined
					)
						firstDig = (digits.indexOf(firstWord[0]) + 1).toString();
				}

				const lastWord = x
					.split('')
					.reverse()
					.join('')
					.match(
						new RegExp(
							`/${digits.map(y => y.split('').reverse().join('')).join('|')}/`
						)
					);
				if (lastWord && lastWord.length > 0) {
					if (
						x.lastIndexOf(lastWord[0].split('').reverse().join('')) >
							x.lastIndexOf(lastDig) ||
						lastDig == undefined
					) {
						lastDig = (
							digits.indexOf(lastWord[0].split('').reverse().join('')) + 1
						).toString();
					}
				}
			}

			return +(firstDig + lastDig);
		})
	);
};

export { input };
