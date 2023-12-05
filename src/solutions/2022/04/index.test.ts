import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.04.1', () => {
	expect(findSolutionOne(parseInput())).toBe(500);
});

test('2022.04.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(815);
});
