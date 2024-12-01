import input from './input';

export const parseInput = () => {
	let listOne: number[] = [];
	let listTwo: number[] = [];

	for (const line of input.split('\n')) {
		const [num1, num2] = line.split('   ');
		listOne.push(+num1);
		listTwo.push(+num2);
	}

	return [listOne, listTwo];
};

export const findSolutionOne = ([listOne, listTwo]: ReturnType<
	typeof parseInput
>): number => {
	listOne.sort();
	listTwo.sort();

	let totalDist = 0;

	for (let i = 0; i < listOne.length; i++) {
		totalDist += Math.abs(listTwo[i] - listOne[i]);
	}

	return totalDist;
};

export const findSolutionTwo = ([listOne, listTwo]: ReturnType<
	typeof parseInput
>): number => {
	const numToCount = new Map<number, number>();

	for (const num of listOne) {
		numToCount.set(num, listTwo.filter(x => x == num).length);
	}

	let similiarity = 0;

	for (const num of listOne) {
		similiarity += num * numToCount.get(num)!;
	}

	return similiarity;
};

export { input };
