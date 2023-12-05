import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1676);
});

test('2021.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1706);
});
