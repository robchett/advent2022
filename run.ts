import * as fs from 'fs';

import {run_part1 as run01_part1, run_part2 as run01_part2} from './src/01';
var input = fileToLines('./inputs/01.txt');

console.log('Day1 Part 1', run01_part1(input));
console.log('Day1 Part 2', run01_part2(input));


import {run_part1 as run02_part1, run_part2 as run02_part2} from './src/02';
var input = fileToLines('./inputs/02.txt');

console.log('Day2 Part 1', run02_part1(input));
console.log('Day2 Part 2', run02_part2(input));


import {run_part1 as run03_part1, run_part2 as run03_part2} from './src/03';
var input = fileToLines('./inputs/03.txt');

console.log('Day3 Part 1', run03_part1(input));
console.log('Day3 Part 2', run03_part2(input));

import {run_part1 as run04_part1, run_part2 as run04_part2} from './src/04';
var input = fileToLines('./inputs/04.txt');

console.log('Day4 Part 1', run04_part1(input));
console.log('Day4 Part 2', run04_part2(input));

import {run_part1 as run05_part1, run_part2 as run05_part2} from './src/05';
var input = fileToLines('./inputs/05.txt');

console.log('Day5 Part 1', run05_part1(input));
console.log('Day5 Part 2', run05_part2(input));

import {run_part1 as run06_part1, run_part2 as run06_part2} from './src/06';
var input = fileToLines('./inputs/06.txt');

console.log('Day6 Part 1', run06_part1(input));
console.log('Day6 Part 2', run06_part2(input));

import {run_part1 as run07_part1, run_part2 as run07_part2} from './src/07';
var input = fileToLines('./inputs/07.txt');

console.log('Day7 Part 1', run07_part1(input));
console.log('Day7 Part 2', run07_part2(input));

import {run_part1 as run08_part1, run_part2 as run08_part2} from './src/08';
var input = fileToLines('./inputs/08.txt');

console.log('Day8 Part 1', run08_part1(input));
console.log('Day8 Part 2', run08_part2(input));

import {run_part1 as run09_part1, run_part2 as run09_part2} from './src/09';
var input = fileToLines('./inputs/09.txt');

console.log('Day9 Part 1', run09_part1(input));
console.log('Day9 Part 2', run09_part2(input));

import {run_part1 as run10_part1, run_part2 as run10_part2} from './src/10';
var input = fileToLines('./inputs/10.txt');

console.log('Day10 Part 1', run10_part1(input));
console.log('Day10 Part 2', run10_part2(input));

import {Monkey, run_part1 as run11_part1, run_part2 as run11_part2} from './src/11';

var monkeys = [
    new Monkey([89,74], (old) => old * 5, (n) => n % 17 == 0 ? 4 : 7),
    new Monkey([75, 69, 87, 57, 84, 90, 66, 50], (old) => old + 3, (n) => n % 7 == 0 ? 3 : 2),
    new Monkey([55], (old) => old + 7, (n) => n % 13 == 0 ? 0 : 7),
    new Monkey([69, 82, 69, 56, 68], (old) => old + 5, (n) => n % 2 == 0 ? 0 : 2),
    new Monkey([72, 97, 50], (old) => old + 2, (n) => n % 19 == 0 ? 6 : 5),
    new Monkey([90, 84, 56, 92, 91, 91], (old) => old * 19, (n) => n % 3 == 0 ? 6 : 1),
    new Monkey([63, 93, 55, 53], (old) => old * old, (n) => n % 5 == 0 ? 3 : 1),
    new Monkey([50, 61, 52, 58, 86, 68, 97], (old) => old + 4, (n) => n % 11 == 0 ? 5 : 4),
]

console.log('Day11 Part 1', run11_part1(monkeys));

var monkeys = [
    new Monkey([89,74], (old) => old * 5, (n) => n % 17 == 0 ? 4 : 7),
    new Monkey([75, 69, 87, 57, 84, 90, 66, 50], (old) => old + 3, (n) => n % 7 == 0 ? 3 : 2),
    new Monkey([55], (old) => old + 7, (n) => n % 13 == 0 ? 0 : 7),
    new Monkey([69, 82, 69, 56, 68], (old) => old + 5, (n) => n % 2 == 0 ? 0 : 2),
    new Monkey([72, 97, 50], (old) => old + 2, (n) => n % 19 == 0 ? 6 : 5),
    new Monkey([90, 84, 56, 92, 91, 91], (old) => old * 19, (n) => n % 3 == 0 ? 6 : 1),
    new Monkey([63, 93, 55, 53], (old) => old * old, (n) => n % 5 == 0 ? 3 : 1),
    new Monkey([50, 61, 52, 58, 86, 68, 97], (old) => old + 4, (n) => n % 11 == 0 ? 5 : 4),
]

console.log('Day11 Part 2', run11_part2(monkeys, 17 * 7 * 13 * 2 * 19 * 5 * 11 * 3));


function fileToLines(file: string): string[] {
    return fs.readFileSync(file).toString().replace(/\r/g, '').split("\n");
}