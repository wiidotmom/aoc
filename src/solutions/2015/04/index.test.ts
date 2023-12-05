import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2015.04.1', () => {
	expect(findSolutionOne(parseInput())).toBe(254575);
});

test('2015.04.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1038736);
});
