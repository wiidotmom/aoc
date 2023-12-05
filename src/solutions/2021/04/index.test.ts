import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.04.1', () => {
	expect(findSolutionOne(parseInput())).toBe(38594);
});

test('2021.04.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(21184);
});
