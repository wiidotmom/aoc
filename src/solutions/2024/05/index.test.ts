import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2024.05.1', () => {
	expect(findSolutionOne(parseInput())).toBe(5762);
});

test('2024.05.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(4130);
});
