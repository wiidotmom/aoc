import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.05.1', () => {
	expect(findSolutionOne(parseInput())).toBe(959);
});

test('2020.05.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(527);
});
