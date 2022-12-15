/** Day 12: Hill Climbing Algorithm */

/**
You try contacting the Elves using your handheld device, but the river you're following must be too low to get a decent signal.

You ask the device for a heightmap of the surrounding area (your puzzle input). The heightmap shows the local area from above broken into a grid; the elevation of each square of the grid is given by a single lowercase letter, where a is the lowest elevation, b is the next-lowest, and so on up to the highest elevation, z.

Also included on the heightmap are marks for your current position (S) and the location that should get the best signal (E). Your current position (S) has elevation a, and the location that should get the best signal (E) has elevation z.

You'd like to reach E, but to save energy, you should do it in as few steps as possible. During each step, you can move exactly one square up, down, left, or right. To avoid needing to get out your climbing gear, the elevation of the destination square can be at most one higher than the elevation of your current square; that is, if your current elevation is m, you could step to elevation n, but not to elevation o. (This also means that the elevation of the destination square can be much lower than the elevation of your current square.)

For example:

Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi
Here, you start in the top-left corner; your goal is near the middle. You could start by moving down or right, but eventually you'll need to head toward the e at the bottom. From there, you can spiral around to the goal:

v..v<<<<
>v.vv<<^
.>vv>E^^
..v>>>^^
..>>>>>^
In the above diagram, the symbols indicate whether the path exits each square moving up (^), down (v), left (<), or right (>). The location that should get the best signal is still E, and . marks unvisited squares.

This path reaches the goal in 31 steps, the fewest possible.

What is the fewest steps required to move from your current position to the location that should get the best signal?
 */

export function run_part1(input: string[]): number {


    let maxX = input[0].length - 1;
    let maxY = input.length - 1;
    let maxSteps = (maxX + 1) * (maxY + 1);
    let startX = -1;
    let startY = -1;

    let bestPaths: Map<string, number> = new Map();
    for (let i = 0; i < maxX; i++) {
        for (let j = 0; j < maxY; j++) {
            bestPaths.set(`${i},${j}`, maxSteps)
            if (input[j][i] == 'S') {
                startX = i;
                startY = j;
                bestPaths.set(`${i},${j}`, 0)
            }
        }
    }

    let branches: [number, number, string][][] = [[[startX, startY, '.']]];
    let bestPath: [number, number, string][] = [];
    let dirs: [number, number, string][] = [[0, 1, 'V'], [0, -1, '^'], [1, 0, '>'], [-1, 0, '<']];
    let branch;
    while (branch = branches.pop()) {
        let [currX, currY] = branch[0];
        if (bestPath.length && branch.length >= bestPath.length) {
            continue;
        }
        for (let [dx, dy, dir] of dirs) {
            let x = currX + dx;
            let y = currY + dy;
            if (
                0 > x || x > maxX ||
                0 > y || y > maxY
            ) {
                continue;
            }
            if (
                input[y][x] == 'E' && input[currY][currX] == 'z'
            ) {
                if (bestPath.length == 0 || bestPath.length > branch.length) {
                    bestPath = branch;
                }
                continue;
            }
            let currSymbol = input[currY][currX] == 'S' ? 'a'.charCodeAt(0) - 1 : input[currY][currX].charCodeAt(0);
            let targetSymbol = input[y][x] == 'E' ? 'z'.charCodeAt(0) + 1 : input[y][x].charCodeAt(0);
            if (
                (currSymbol + 1 >= targetSymbol) &&
                branch.length + 1 < (bestPaths.get(`${x},${y}`) ?? maxSteps)
            ) {
                let newBranch: [number, number, string][] = [...branch.map((x): [number, number, string] => [x[0], x[1], x[2]])];
                newBranch[0][2] = dir;
                bestPaths.set(`${x},${y}`, branch.length + 1)
                branches.push([[x, y, '.'], ...newBranch])
            }
        }
    }
    return bestPath.length;
}

/**
As you walk up the hill, you suspect that the Elves will want to turn this into a hiking trail. The beginning isn't very scenic, though; perhaps you can find a better starting point.

To maximize exercise while hiking, the trail should start as low as possible: elevation a. The goal is still the square marked E. However, the trail should still be direct, taking the fewest steps to reach its goal. So, you'll need to find the shortest path from any square at elevation a to the square marked E.

Again consider the example from above:

Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi
Now, there are six choices for starting position (five marked a, plus the square marked S that counts as being at elevation a). If you start at the bottom-left square, you can reach the goal most quickly:

...v<<<<
...vv<<^
...v>E^^
.>v>>>^^
>^>>>>>^
This path reaches the goal in only 29 steps, the fewest possible.

What is the fewest steps required to move starting from any square with elevation a to the location that should get the best signal?
 */

export function run_part2(input: string[]): number {
    let maxX = input[0].length - 1;
    let maxY = input.length - 1;
    let maxSteps = (maxX + 1) * (maxY + 1);
    let startX = -1;
    let startY = -1;

    let bestPaths: Map<string, number> = new Map();
    for (let i = 0; i < maxX; i++) {
        for (let j = 0; j < maxY; j++) {
            bestPaths.set(`${i},${j}`, maxSteps)
            if (input[j][i] == 'S') {
                startX = i;
                startY = j;
                bestPaths.set(`${i},${j}`, 0)
            }
        }
    }

    let branches: [number, number, string][][] = [[[startX, startY, 'a']]];
    let bestPath: [number, number, string][] = [];
    let dirs: [number, number][] = [[0, 1], [0, -1], [1, 0], [-1, 0,]];
    let branch;
    while (branch = branches.pop()) {
        let [currX, currY] = branch[0];
        if (bestPath.length && branch.length >= bestPath.length) {
            continue;
        }
        for (let [dx, dy] of dirs) {
            let x = currX + dx;
            let y = currY + dy;
            if (
                0 > x || x > maxX ||
                0 > y || y > maxY
            ) {
                continue;
            }
            if (
                input[y][x] == 'E' && input[currY][currX] == 'z'
            ) {
                if (bestPath.length == 0 || bestPath.length > branch.length) {
                    bestPath = branch;
                }
                continue;
            }
            let currSymbol = input[currY][currX] == 'S' ? 'a'.charCodeAt(0) - 1 : input[currY][currX].charCodeAt(0);
            let targetSymbol = input[y][x] == 'E' ? 'z'.charCodeAt(0) + 1 : input[y][x].charCodeAt(0);
            if (
                (currSymbol + 1 >= targetSymbol) &&
                branch.length + 1 < (bestPaths.get(`${x},${y}`) ?? maxSteps)
            ) {
                if (input[y][x] == 'a') {
                    branches.push([[x, y, input[y][x]]])
                    bestPaths.set(`${x},${y}`, 0)
                } else {
                    let newBranch: [number, number, string][] = [...branch.map((x): [number, number, string] => [x[0], x[1], x[2]])];
                    bestPaths.set(`${x},${y}`, branch.length + 1)
                    branches.push([[x, y, input[y][x]], ...newBranch])
                }
            }
        }
    }
    return bestPath.length;
}