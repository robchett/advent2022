import { run_part1, run_part2 } from '../src/{day}';

let test_case: string[] = [

];

describe('testing day {day} part 1', () => {
    test('Checking test cases', () => {
        expect(run_part1(test_case)).toBe(0);
    });
});

describe('testing day {day} part 2', () => {
    test('Checking test cases', () => {
        expect(run_part2(test_case)).toBe(0);
    });
});