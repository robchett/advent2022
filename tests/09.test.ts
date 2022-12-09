import { run_part1, run_part2 } from '../src/09';

let test_case = [
  'R 4',
  'U 4',
  'L 3',
  'D 1',
  'R 4',
  'D 1',
  'L 5',
  'R 2',
];

describe('testing day 8 part 1', () => {
  test('Checking test cases', () => {
    expect(run_part1(test_case)).toBe(13);
  });
});

let test_case_2 = [
  'R 5',
  'U 8',
  'L 8',
  'D 3',
  'R 17',
  'D 10',
  'L 25',
  'U 20',
];

describe('testing day 8 part 2', () => {
  test('Checking test cases', () => {
    expect(run_part2(test_case)).toBe(1);
    expect(run_part2(test_case_2)).toBe(36);
  })
});