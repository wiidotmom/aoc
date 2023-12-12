import 'utils';

import input from './input';
import { sum } from 'utils';

export const parseInput = () =>
	input.split('\n').map(x => x.split(' ').map(y => +y));

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	return sum(
		...input.map(history => {
			let histories = [history];
			while (histories[histories.length - 1].some(x => x != 0)) {
				histories.push(
					histories[histories.length - 1].pairs().map(([a, b]) => b - a)
				);
			}
			histories.reverse();
			for (let i = 0; i < histories.length; i++) {
				if (i == 0) {
					histories[i].push(0);
				} else {
					histories[i].push(
						histories[i][histories[i].length - 1] +
							histories[i - 1][histories[i].length - 1]
					);
				}
			}
			return histories[histories.length - 1][
				histories[histories.length - 1].length - 1
			];
		})
	);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	return sum(
		...input.map(history => {
			let histories = [history];
			while (histories[histories.length - 1].some(x => x != 0)) {
				histories.push(
					histories[histories.length - 1].pairs().map(([a, b]) => b - a)
				);
			}
			histories.reverse();
			for (let i = 0; i < histories.length; i++) {
				if (i == 0) {
					histories[i] = [0, ...histories[i]];
				} else {
					histories[i] = [
						histories[i][0] - histories[i - 1][0],
						...histories[i],
					];
					histories[i].push(
						histories[i][histories[i].length - 1] +
							histories[i - 1][histories[i].length - 1]
					);
				}
			}
			return histories[histories.length - 1][0];
		})
	);
};

export { input };
