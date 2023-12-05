import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.02.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2036120);
});

test('2021.02.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(2015547716);
});
