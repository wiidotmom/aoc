import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.07.1', () => {
	expect(findSolutionOne(parseInput())).toBe(372);
});

test('2020.07.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(8015);
});
