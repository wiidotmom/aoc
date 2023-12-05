import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.09.1', () => {
	expect(findSolutionOne(parseInput())).toBe(5695);
});

test('2022.09.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(2434);
});
