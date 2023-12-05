import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2022.07.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1084134);
});

test('2022.07.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(6183184);
});
