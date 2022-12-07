import { run_part1, run_part2 } from '../src/07';

let test_case = [
  '$ cd /',
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k',
];

describe('testing day 7 part 1', () => {
  test('Checking test cases', () => {
    expect(run_part1(test_case)).toBe(95437);
  });
});

describe('testing day 6 part 2', () => {
  test('Checking test case', () => {
    expect(run_part2(test_case)).toBe(24933642);
  });
});