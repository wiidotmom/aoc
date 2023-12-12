import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2023.09.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1930746032);
});

test('2023.09.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1154);
});
