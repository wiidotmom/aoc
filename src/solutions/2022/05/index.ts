import input from './input';

// i hate this
export const parseInput = () => {
	let crateLists = input.split('\n\n')[0].replaceAll('    ', ' [ ]');
	while (crateLists.includes(' [ ]['))
		crateLists = crateLists.replaceAll(' [ ][', '[ ] [');
	let contents: string[][] = Array(
		+[...input.split('\n\n')[0].split('\n').pop()!].pop()!
	).fill([]);
	crateLists
		.split('\n')
		.map(x =>
			x.split('[').map(x => (x[0] != ' ' && x[0] != undefined ? x[0] : 'EMPTY'))
		)
		.slice(0, -1)
		.forEach(crateList => {
			crateList.forEach((crate, i) => {
				if (crate != 'EMPTY') contents[i - 1] = [...contents[i - 1], crate];
			});
		});
	contents = contents.map(x => x.reverse());
	const instructions = input
		.split('\n\n')[1]
		.split('\n')
		.map(x => ({
			amount: +x.split(' from ')[0].replace('move ', ''),
			origin: +x.split(' from ')[1][0],
			target: +x.split(' to ')[1],
		}));
	return {
		instructions,
		contents,
	};
};

const run = (
	input: ReturnType<typeof parseInput>,
	oneAtATime: boolean = true
) => {
	const { instructions, contents } = input;

	instructions.forEach(instruction => {
		const toMove = contents[instruction.origin - 1].slice(-instruction.amount);
		const newOrigin = contents[instruction.origin - 1].slice(
			0,
			-instruction.amount
		);
		contents[instruction.origin - 1] = Array.from(newOrigin);
		contents[instruction.target - 1] = [
			...contents[instruction.target - 1],
			...(oneAtATime ? toMove.reverse() : toMove),
		];
	});

	return contents.map(x => x[x.length - 1]).join('');
};

export const findSolutionOne = run;

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) =>
	run(input, false);

export { default as input } from './input';
