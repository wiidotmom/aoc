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
	const digits: { [key: string]: number } = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};

	return sum(
		...input.map(x => {
			const digs = x.split('').filter(y => !Number.isNaN(+y));
			let firstDig = digs[0];
			let lastDig = digs[digs.length - 1];
			if (
				Object.keys(digits)
					.map(y => x.includes(y))
					.some(y => y)
			) {
				const minWordDigIndex = Math.min(
					...Object.keys(digits)
						.map(y => x.indexOf(y))
						.map(y => (y == -1 ? Number.MAX_SAFE_INTEGER : y))
				);

				if (minWordDigIndex < x.indexOf(firstDig) || firstDig == undefined) {
					firstDig =
						digits[
							Object.keys(digits)[
								Object.keys(digits)
									.map(y => x.indexOf(y))
									.map(y => (y == -1 ? Number.MAX_SAFE_INTEGER : y))
									.indexOf(minWordDigIndex)
							]
						].toString();
				}
				const maxWordDigIndex = Math.max(
					...Object.keys(digits).map(y => x.lastIndexOf(y))
				);
				if (maxWordDigIndex > x.lastIndexOf(lastDig) || lastDig == undefined) {
					lastDig =
						digits[
							Object.keys(digits)[
								Object.keys(digits)
									.map(y => x.lastIndexOf(y))
									.indexOf(maxWordDigIndex)
							]
						].toString();
				}
			}
			return +(firstDig + lastDig);
		})
	);
};

export { input };
