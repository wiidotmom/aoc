import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.08.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1749);
});

test('2020.08.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(515);
});
