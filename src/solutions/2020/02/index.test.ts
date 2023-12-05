import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.02.1', () => {
	expect(findSolutionOne(parseInput())).toBe(607);
});

test('2020.02.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(321);
});
