import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.02.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2085);
});

test('2023.02.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(79315);
});
