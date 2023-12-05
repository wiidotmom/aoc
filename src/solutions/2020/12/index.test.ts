import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.12.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1177);
});

test('2020.12.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(46530);
});
