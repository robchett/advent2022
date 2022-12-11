import { Monkey, run_part1, run_part2 } from '../src/11';

let test_case: Monkey[] = [
  new Monkey([79,98], (old) => old * 19, (n) => n % 23 == 0 ? 2 : 3),
  new Monkey([54,65,75,74], (old) => old + 6, (n) => n % 19 == 0 ? 2 : 0),
  new Monkey([79,60,97], (old) => old * old, (n) => n % 13 == 0 ? 1 : 3),
  new Monkey([74], (old) => old + 3, (n) => n % 17 == 0 ? 0 : 1),
] ;

describe('testing day 11 part 1', () => {
  test('Checking test cases', () => {
    expect(run_part1(test_case)).toBe(10605);
  });
});

let test_case2: Monkey[] = [
  new Monkey([79,98], (old) => old * 19, (n) => n % 23 == 0 ? 2 : 3),
  new Monkey([54,65,75,74], (old) => old + 6, (n) => n % 19 == 0 ? 2 : 0),
  new Monkey([79,60,97], (old) => old * old, (n) => n % 13 == 0 ? 1 : 3),
  new Monkey([74], (old) => old + 3, (n) => n % 17 == 0 ? 0 : 1),
] ;

describe('testing day 11 part 2', () => {
  test('Checking test cases', () => {
    expect(run_part2(test_case2, 23 * 19 * 13 * 17)).toBe(2713310158);
  })
});