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


function fileToLines(file: string): string[] {
    return fs.readFileSync(file).toString().replace(/\r/g, '').split("\n");
}