import input from './input';

export const parseInput = () =>
	input.split('\n').map(x => [...x.matchAll(/\d+/g)].map(y => +y[0]));

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const [times, distances] = input;

	let wins: number[] = [];
	for (const time of times) {
		let winCount = 0;
		const i = times.indexOf(time);
		for (let j = 1; j < time; j++) {
			if (j * (time - j) >= distances[i]) {
				winCount++;
			}
		}
		wins.push(winCount);
	}

	return wins.reduce((a, b) => a * b);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const [t, d] = input;

	const times = [t.reduce((a, b) => +`${a}${b}`)];
	const distances = [d.reduce((a, b) => +`${a}${b}`)];

	let wins: number[] = [];
	for (const time of times) {
		let winCount = 0;
		const i = times.indexOf(time);
		for (let j = 1; j < time; j++) {
			if (j * (time - j) >= distances[i]) {
				winCount++;
			}
		}
		wins.push(winCount);
	}

	return wins.reduce((a, b) => a * b);
};

export { input };
