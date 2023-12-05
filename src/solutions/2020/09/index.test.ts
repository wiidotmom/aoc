import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.09.1', () => {
	expect(findSolutionOne(parseInput())).toBe(90433990);
});

test('2020.09.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(11691646);
});
