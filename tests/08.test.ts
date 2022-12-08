import { isVisible, viewDistance, run_part1, run_part2 } from '../src/08';

let test_case = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390',
];

let scans: Array<[number, number, boolean]> = [
  [1, 1, true],
  [1, 2, true],
  [1, 2, false],
  [2, 1, true],
  [2, 2, false],
  [2, 3, true],
  [3, 1, false],
  [3, 2, true],
  [3, 3, false]
]

describe('testing day 8 part 1', () => {
  // for (let [i,j,res] of scans) {
  //   test(`Checking test ${j},${i}`, () => {
  //     expect(isVisible(test_case, j, i)).toBe(res);
  //   });
  // }
  test('Checking test cases', () => {
    expect(run_part1(test_case)).toBe(21);
  });
});

describe('testing day 8 part 2', () => {
  test('Checking test cases', () => {
    expect(viewDistance(test_case, 2,1)).toBe(4);
    expect(viewDistance(test_case, 2,3)).toBe(8);
  })
});