import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.11.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2270);
});

test('2020.11.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(2042);
});
