import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.11.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1673);
});

test('2021.11.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(279);
});
