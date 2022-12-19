import { run_part1, run_part2 } from '../src/15';

let test_case: string[] = [
    'Valve AA has flow rate=0; tunnels lead to valves DD, II, BB',
    'Valve BB has flow rate=13; tunnels lead to valves CC, AA',
    'Valve CC has flow rate=2; tunnels lead to valves DD, BB',
    'Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE',
    'Valve EE has flow rate=3; tunnels lead to valves FF, DD',
    'Valve FF has flow rate=0; tunnels lead to valves EE, GG',
    'Valve GG has flow rate=0; tunnels lead to valves FF, HH',
    'Valve HH has flow rate=22; tunnel leads to valve GG',
    'Valve II has flow rate=0; tunnels lead to valves AA, JJ',
    'Valve JJ has flow rate=21; tunnel leads to valve II',
];

describe('testing day {day} part 1', () => {
    test('Checking test cases', () => {
        expect(run_part1(test_case)).toBe(1651);
    });
});

describe('testing day {day} part 2', () => {
    test('Checking test cases', () => {
        expect(run_part2(test_case)).toBe(1707);
    });
});