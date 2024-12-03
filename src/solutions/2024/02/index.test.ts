import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2024.02.1', () => {
	expect(findSolutionOne(parseInput())).toBe(224);
});

test('2024.02.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(293);
});
