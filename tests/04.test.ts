import { rangeContains, run_part1, rangeOverlap, run_part2 } from '../src/04';

let testCases: Array<[string, boolean]> = [
  ["2-4,6-8", false],
  ["2-3,4-5", false],
  ["5-7,7-9", false],
  ["2-8,3-7", true],
  ["6-6,4-6", true],
  ["2-6,4-8", false],
];

describe('testing day 4 part 1', () => {
  for (var map of testCases) {
    let [i,v] = map;
    test('Checking test case: ' + i, () => {
      expect(rangeContains(i)).toBe(v);
    });
  }
  test('Checking test case', () => {
    expect(run_part1(testCases.map((i) => i[0]))).toBe(2);
  });
});

let testCasesPart2: Array<[string, boolean]> = [
  ["2-4,6-8", false],
  ["2-3,4-5", false],
  ["5-7,7-9", true],
  ["2-8,3-7", true],
  ["6-6,4-6", true],
  ["2-6,4-8", true],
];

describe('testing day 4 part 2', () => {
  for (var map of testCasesPart2) {
    let [i,v] = map;
    test('Checking test case: ' + i, () => {
      expect(rangeOverlap(i)).toBe(v);
    });
  }
  test('Checking test c ase', () => {
    expect(run_part2(testCasesPart2.map((i) => i[0]))).toBe(4);
  });
});