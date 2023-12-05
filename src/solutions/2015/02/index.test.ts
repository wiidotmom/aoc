import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2015.02.1', () => {
	expect(findSolutionOne(parseInput())).toBe(1586300);
});

test('2015.02.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(3737498);
});
