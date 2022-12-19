import { run_part1, run_part2, compare, List } from '../src/13';

let test_case: [List, List, -1|1][] = [
    [[1,1,3,1,1], [1,1,5,1,1], -1],
    [[[1],[2,3,4]],[[1],4], -1],
    [[9],[[8,7,6]], 1],
    [[[4,4],4,4],[[4,4],4,4,4], -1],
    [[7,7,7,7],[7,7,7], 1],
    [[],[3], -1],
    [[[[]]],[[]], 1],
    [[1,[2,[3,[4,[5,6,7]]]],8,9],[1,[2,[3,[4,[5,6,0]]]],8,9], 1],
];

describe('testing day {day} part 1', () => {
    test('Checking test cases', () => {
        for (let [a, b, res] of test_case) {
            expect(compare(a, b)).toBe(res)
        }
    });
});

// describe('testing day {day} part 2', () => {
//     test('Checking test cases', () => {
//         expect(run_part2(test_case)).toBe(140);
//     });
// });