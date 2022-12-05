import { parseDiagram, run_part1, run_part2 } from '../src/05';

let diagram = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3`;
 let rules = `move 1 from 2 to 1
 move 3 from 1 to 3
 move 2 from 2 to 1
 move 1 from 1 to 2`;
let testCase = `${diagram}\n\n${rules}`.split("\n");

describe('testing day 5 part 1', () => {
  test('Checking diagram parser', () => {
    expect(parseDiagram(diagram.split("\n"))).toStrictEqual([["N", "Z"], ["D", "C", "M"], ["P"]]);
  });
  test('Checking test case', () => {
    expect(run_part1(testCase)).toBe("CMZ");
  });
});


describe('testing day 5 part 2', () => {
  test('Checking test case', () => {
    expect(run_part2(testCase)).toBe("MCD");
  });
});