import { run_part1, run_part2 } from '../src/03';

describe('testing day 3 part 1', () => {
  test('Example vJrwpWtwJgWrhcsFMMfFFhFp', () => {
    expect(run_part1(['vJrwpWtwJgWrhcsFMMfFFhFp'])).toBe(16);
  });
  test('Example jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', () => {
    expect(run_part1(['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'])).toBe(38);
  });
  test('Example PmmdzqPrVvPwwTWBwg', () => {
    expect(run_part1(['PmmdzqPrVvPwwTWBwg'])).toBe(42);
  });
  test('Example wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn', () => {
    expect(run_part1(['wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn'])).toBe(22);
  });
  test('Example ttgJtRGJQctTZtZT', () => {
    expect(run_part1(['ttgJtRGJQctTZtZT'])).toBe(20);
  });
  test('Example CrZsJsPPZsGzwwsLwLmpwMDw', () => {
    expect(run_part1(['CrZsJsPPZsGzwwsLwLmpwMDw'])).toBe(19);
  });
});

describe('testing day 3 part 2', () => {
  test('Example 1', () => {
    expect(run_part2([
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg'
    ])).toBe(18);
  });
  test('Example 2', () => {
    expect(run_part2([
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw'
    ])).toBe(52);
  });
});