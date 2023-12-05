import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2015.03.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2592);
});

test('2015.03.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(2360);
});
