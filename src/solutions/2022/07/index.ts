import { sum } from 'utils';

import input from './input';

export const parseInput = () => input.split('\n');

const getDirectorySize = (
	directories: Map<string, string[]>,
	directory: string
) => {
	const contents = directories.get(directory)!;
	let total = 0;
	contents.forEach(item => {
		if (!isNaN(+item.split(' ')[0])) {
			total += +item.split(' ')[0];
		} else {
			total += getDirectorySize(
				directories,
				directory == ''
					? item.split(' ')[1]
					: `${directory}/${item.split(' ')[1]}`
			);
		}
	});
	return total;
};

const getSizes = (input: ReturnType<typeof parseInput>) => {
	let directory: string[] = [];
	const directories = new Map<string, string[]>();
	input.forEach((line, i) => {
		if (i == 0) return;
		if (line.startsWith('$')) {
			const command = line.replace('$ ', '');
			if (command.startsWith('cd')) {
				const toDir = command.split(' ')[1];
				if (toDir == '..') directory.pop();
				else directory.push(toDir);
			} else if (command == 'ls') {
				for (
					let j = i + 1;
					j < input.length && !input[j].startsWith('$');
					j++
				) {
					if (!directories.get(directory.join('/')))
						directories.set(directory.join('/'), []);
					directories.set(directory.join('/'), [
						...directories.get(directory.join('/'))!,
						input[j],
					]);
				}
			}
		}
	});
	const sizes = new Map<string, number>();
	[...directories.keys()].forEach(directory => {
		sizes.set(directory, getDirectorySize(directories, directory));
	});
	return sizes;
};

export const findSolutionOne = (input: ReturnType<typeof parseInput>) =>
	sum(...[...getSizes(input).values()].filter(x => x <= 100000));

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const sizes = getSizes(input);
	return [...sizes.values()]
		.filter(x => x >= sizes.get('')! - (70000000 - 30000000))
		.sort((a, b) => a - b)[0];
};

export { default as input } from './input';
