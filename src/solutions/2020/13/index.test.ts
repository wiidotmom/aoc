import { expect, test } from 'vitest';

import { findSolutionOne, findSolutionTwo, parseInput } from '.';

test('2020.13.1', () => {
	expect(findSolutionOne(parseInput())).toBe(2947);
});

test('2020.13.2', () => {
	expect(findSolutionTwo(parseInput())).toBe(526090562196173);
});
