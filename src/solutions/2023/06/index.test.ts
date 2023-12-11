import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.06.1', () => {
	expect(findSolutionOne(parseInput())).toBe(440000);
});

test('2023.06.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(26187338);
});
