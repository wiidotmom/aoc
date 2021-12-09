import input from './input';

export const parseInput = () => input.split('\n\n');

export const findSolutionOne = (input: string[]): number => {
	const groups = input.map(x => x.split('\n'));

	let sum: number = 0;
	groups.forEach(group => {
		let answered: string[] = [];
		group.forEach(person => {
			person.split('').forEach(char => {
				if (!answered.includes(char)) answered.push(char);
			});
		});
		sum += answered.length;
	});
	return sum;
};

export const findSolutionTwo = (input: string[]): number => {
	const groups = input.map(x => x.split('\n'));

	let sum: number = 0;
	groups.forEach(group => {
		let answered: string[] = [];
		group.forEach(person => {
			person.split('').forEach(char => {
				if (!answered.includes(char) && group.every(per => per.includes(char)))
					answered.push(char);
			});
		});
		sum += answered.length;
	});
	return sum;
};
