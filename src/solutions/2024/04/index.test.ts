import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2024.04.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2462);
});

test('2024.04.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1877);
});
