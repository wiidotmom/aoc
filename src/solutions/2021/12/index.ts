import input from './input';

import { isUpperCase } from 'utils';

const findCountOfNode = (path: string[], node: string) => {
	return path.join('').split(node).length - 1;
};

export const parseInput = () => input.split('\n');

export const findSolutionOne = (input: string[]): number => {
	const nodes: { [key: string]: string[] } = {};

	input.forEach(line => {
		line.split('-').forEach((x, i) => {
			if (!nodes[x]) nodes[x] = [];
			nodes[x].push(i === 0 ? line.split('-')[1] : line.split('-')[0]);
		});
	});

	const paths = new Set<string>();

	const path = (node: string, prev: string[]) => {
		if (node === 'end') {
			paths.add([...prev, node].join(','));
			return;
		}
		nodes[node].forEach(x => {
			if (!isUpperCase(x) && findCountOfNode(prev, x) > 0) return;
			if (x !== node && x !== 'start') path(x, [...prev, node]);
		});
	};

	path('start', []);

	return paths.size;
};

export const findSolutionTwo = (input: string[]): number => {
	const nodes: { [key: string]: string[] } = {};

	input.forEach(line => {
		line.split('-').forEach((x, i) => {
			if (!nodes[x]) nodes[x] = [];
			nodes[x].push(i === 0 ? line.split('-')[1] : line.split('-')[0]);
		});
	});

	const paths = new Set<string>();

	const path = (node: string, prev: string[], canVisitTwice: boolean) => {
		if (node === 'end') {
			paths.add([...prev, node].join(','));
			return;
		}
		nodes[node].forEach(x => {
			if (!canVisitTwice && !isUpperCase(x) && findCountOfNode(prev, x) > 0)
				return;
			if (
				canVisitTwice &&
				!isUpperCase(x) &&
				findCountOfNode(prev, x) === 1 &&
				x !== node &&
				x !== 'start'
			)
				return path(x, [...prev, node], false);
			if (x !== node && x !== 'start') path(x, [...prev, node], canVisitTwice);
		});
	};

	path('start', [], true);

	return paths.size;
};
