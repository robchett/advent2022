import { run_part1, run_part2 } from '../src/01';

let testCase = [
  "1000",
  "2000",
  "3000",
  "",
  "4000",
  "",
  "5000",
  "6000",
  "",
  "7000",
  "8000",
  "9000",
  "",
  "10000",
]

describe('testing day 1 part 1', () => {
  test('Checking test case', () => {
    expect(run_part1(testCase)).toBe(24000);
  });
});

describe('testing day 1 part 2', () => {
  test('Checking test case', () => {
    expect(run_part2(testCase)).toBe(45000);
  });
});