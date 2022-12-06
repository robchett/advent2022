import { run_part1, run_part2 } from '../src/06';

describe('testing day 6 part 1', () => {
  test('Checking test cases', () => {
    expect(run_part1(['mjqjpqmgbljsphdztnvjfqwrcgsmlb'])).toBe(7);
    expect(run_part1(['bvwbjplbgvbhsrlpgdmjqwftvncz'])).toBe(5);
    expect(run_part1(['nppdvjthqldpwncqszvftbrmjlhg'])).toBe(6);
    expect(run_part1(['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'])).toBe(10);
    expect(run_part1(['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'])).toBe(11);
  });
});


describe('testing day 6 part 2', () => {
  test('Checking test case', () => {
    expect(run_part2(['mjqjpqmgbljsphdztnvjfqwrcgsmlb'])).toBe(19);
    expect(run_part2(['bvwbjplbgvbhsrlpgdmjqwftvncz'])).toBe(23);
    expect(run_part2(['nppdvjthqldpwncqszvftbrmjlhg'])).toBe(23);
    expect(run_part2(['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'])).toBe(29);
    expect(run_part2(['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'])).toBe(26);
  });
});