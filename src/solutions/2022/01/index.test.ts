import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(71471);
});

test('2022.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(211189);
});
