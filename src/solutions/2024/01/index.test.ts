import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2024.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2815556);
});

test('2024.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(23927637);
});
