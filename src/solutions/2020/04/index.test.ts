import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.04.1', () => {
	expect(findSolutionOne(parseInput())).toBe(237);
});

test('2020.04.2', () => {
	// expect(findSolutionTwo(parseInput())).toBe(172);
});
