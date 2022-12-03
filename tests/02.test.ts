import { run_part1, run_part2 } from '../src/02';

describe('testing day 2 part 1', () => {
  test('Example A Y', () => {
    expect(run_part1(['A Y'])).toBe(8);
  });
  test('Example B X', () => {
    expect(run_part1(['B X'])).toBe(1);
  });
  test('Example C Z', () => {
    expect(run_part1(['C Z'])).toBe(6);
  });
});

describe('testing day 2 part 2', () => {
  test('Example A Y', () => {
    expect(run_part2(['A Y'])).toBe(4);
  });
  test('Example B X', () => {
    expect(run_part2(['B X'])).toBe(1);
  });
  test('Example C Z', () => {
    expect(run_part2(['C Z'])).toBe(7);
  });
});