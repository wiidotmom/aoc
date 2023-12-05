import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2021.09.1', () => {
	expect(findSolutionOne(parseInput())).toBe(512);
});

test('2021.09.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(1600104);
});
