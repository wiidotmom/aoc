import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.12.1', () => {
	expect(findSolutionOne(parseInput())).toBe(3738);
});

test('2021.12.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(120506);
});
