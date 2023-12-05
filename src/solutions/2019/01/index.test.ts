import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2019.01.1', () => {
	expect(findSolutionOne(parseInput())).toBe(3497998);
});

test('2019.01.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(5244112);
});
