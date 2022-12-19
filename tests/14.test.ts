import { run_part1, run_part2 } from '../src/14';

let test_case: string[] = [
    '498,4 -> 498,6 -> 496,6',
    '503,4 -> 502,4 -> 502,9 -> 494,9',
];

describe('testing day {day} part 1', () => {
    test('Checking test cases', () => {
        expect(run_part1(test_case)).toBe(24);
    });
});

describe('testing day {day} part 2', () => {
    test('Checking test cases', () => {
        expect(run_part2(test_case)).toBe(93);
    });
});