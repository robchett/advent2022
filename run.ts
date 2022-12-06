import * as fs from 'fs';

import {run_part1 as run01_part1} from './src/01';
import {run_part2 as run01_part2} from './src/01';
var input = fileToLines('./inputs/01.txt');

console.log('Day1 Part 1', run01_part1(input));
console.log('Day1 Part 2', run01_part2(input));


import {run_part1 as run02_part1} from './src/02';
import {run_part2 as run02_part2} from './src/02';
var input = fileToLines('./inputs/02.txt');

console.log('Day2 Part 1', run02_part1(input));
console.log('Day2 Part 2', run02_part2(input));


import {run_part1 as run03_part1} from './src/03';
import {run_part2 as run03_part2} from './src/03';
var input = fileToLines('./inputs/03.txt');

console.log('Day3 Part 1', run03_part1(input));
console.log('Day3 Part 2', run03_part2(input));

import {run_part1 as run04_part1} from './src/04';
import {run_part2 as run04_part2} from './src/04';
var input = fileToLines('./inputs/04.txt');

console.log('Day4 Part 1', run04_part1(input));
console.log('Day4 Part 2', run04_part2(input));

import {run_part1 as run05_part1} from './src/05';
import {run_part2 as run05_part2} from './src/05';
var input = fileToLines('./inputs/05.txt');

console.log('Day5 Part 1', run05_part1(input));
console.log('Day5 Part 2', run05_part2(input));

import {run_part1 as run06_part1} from './src/06';
import {run_part2 as run06_part2} from './src/06';
var input = fileToLines('./inputs/06.txt');

console.log('Day6 Part 1', run06_part1(input));
console.log('Day6 Part 2', run06_part2(input));


function fileToLines(file: string): string[] {
    return fs.readFileSync(file).toString().replace(/\r/g, '').split("\n");
}