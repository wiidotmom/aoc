import 'utils';

import input from './input';
import { lcm, lcmMany } from 'utils';

export const parseInput = () => input.split('\n\n');

class TreeNode<T> {
	value: T;
	left: T;
	right: T;

	constructor(value: T, left: T, right: T) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

export const findSolutionOne = (input: ReturnType<typeof parseInput>) => {
	const [rawInstructions, rawNodes] = input;
	const instructions = rawInstructions.split('') as ('L' | 'R')[];

	let tree: Map<string, TreeNode<string>> = new Map();
	for (const rawNode of rawNodes.split('\n')) {
		const value = rawNode.split(' = ')[0];
		const nodes = rawNode.split(' = ')[1];
		const [, left, right] = [...nodes.match(/\(([A-Z0-9]+), ([A-Z0-9]+)\)/)!];
		tree.set(value, new TreeNode(value, left, right));
	}

	let activeNodes = [...tree.values()].filter(x => x.value == 'AAA')!;
	return lcmMany(
		...activeNodes.map(node => {
			let current = node;
			let s = 0;
			while (current != node || s == 0) {
				const instruction = instructions[s % instructions.length];
				if (instruction == 'L') current = tree.get(current.left)!;
				else current = tree.get(current.right)!;
				s++;
				if (current.value == 'ZZZ') return s;
			}
			return s;
		})
	);
};

export const findSolutionTwo = (input: ReturnType<typeof parseInput>) => {
	const [rawInstructions, rawNodes] = input;
	const instructions = rawInstructions.split('') as ('L' | 'R')[];

	let tree: Map<string, TreeNode<string>> = new Map();
	for (const rawNode of rawNodes.split('\n')) {
		const value = rawNode.split(' = ')[0];
		const nodes = rawNode.split(' = ')[1];
		const [, left, right] = [...nodes.match(/\(([A-Z0-9]+), ([A-Z0-9]+)\)/)!];
		tree.set(value, new TreeNode(value, left, right));
	}

	let activeNodes = [...tree.values()].filter(x => x.value.endsWith('A'))!;
	return lcmMany(
		...activeNodes.map(node => {
			let current = node;
			let s = 0;
			while (current != node || s == 0) {
				const instruction = instructions[s % instructions.length];
				if (instruction == 'L') current = tree.get(current.left)!;
				else current = tree.get(current.right)!;
				s++;
				if (current.value.endsWith('Z')) return s;
			}
			return s;
		})
	);
};

export { input };
