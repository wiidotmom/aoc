import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.06.1', () => {
	expect(findSolutionOne(parseInput())).toBe(6947);
});

test('2020.06.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(3398);
});
