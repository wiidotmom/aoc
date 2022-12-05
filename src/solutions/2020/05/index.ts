import input from './input';

const getSeatId = (pass: string): number => {
	const CHAR_DIFFS: any = { B: '1', F: '0', R: '1', L: '0' };
	return parseInt(
		pass
			.split('')
			.map(x => CHAR_DIFFS[x])
			.join(''),
		2
	); // concatenate differences, convert from base 2 to base 10 integer
};

export const parseInput = () => input.split('\n');

export const findSolutionOne = (
	input: ReturnType<typeof parseInput>
): number => {
	let seatIds: number[] = [];

	input.forEach(pass => seatIds.push(getSeatId(pass)));

	return Math.max(...seatIds);
};

export const findSolutionTwo = (
	input: ReturnType<typeof parseInput>
): number => {
	let seatIds: number[] = [];

	input.forEach(pass => seatIds.push(getSeatId(pass)));

	let seat = 0;
	for (
		let seatCount = Math.min(...seatIds);
		seatCount < Math.max(...seatIds);
		seatCount++
	) {
		if (!seatIds.includes(seatCount)) seat = seatCount;
	}
	return seat;
};

export { default as input } from './input';
