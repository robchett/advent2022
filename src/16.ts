/** 15: Proboscidea Volcanium */

/**
The sensors have led you to the origin of the distress signal: yet another handheld device, just like the one the Elves gave you. However, you don't see any Elves around; instead, the device is surrounded by elephants! They must have gotten lost in these tunnels, and one of the elephants apparently figured out how to turn on the distress signal.

The ground rumbles again, much stronger this time. What kind of cave is this, exactly? You scan the cave with your handheld device; it reports mostly igneous rock, some ash, pockets of pressurized gas, magma... this isn't just a cave, it's a volcano!

You need to get the elephants out of here, quickly. Your device estimates that you have 30 minutes before the volcano erupts, so you don't have time to go back out the way you came in.

You scan the cave for other options and discover a network of pipes and pressure-release valves. You aren't sure how such a system got into a volcano, but you don't have time to complain; your device produces a report (your puzzle input) of each valve's flow rate if it were opened (in pressure per minute) and the tunnels you could use to move between the valves.

There's even a valve in the room you and the elephants are currently standing in labeled AA. You estimate it will take you one minute to open a single valve and one minute to follow any tunnel from one valve to another. What is the most pressure you could release?

For example, suppose you had the following scan output:

Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II
All of the valves begin closed. You start at valve AA, but it must be damaged or jammed or something: its flow rate is 0, so there's no point in opening it. However, you could spend one minute moving to valve BB and another minute opening it; doing so would release pressure during the remaining 28 minutes at a flow rate of 13, a total eventual pressure release of 28 * 13 = 364. Then, you could spend your third minute moving to valve CC and your fourth minute opening it, providing an additional 26 minutes of eventual pressure release at a flow rate of 2, or 52 total pressure released by valve CC.

Making your way through the tunnels like this, you could probably open many or all of the valves by the time 30 minutes have elapsed. However, you need to release as much pressure as possible, so you'll need to be methodical. Instead, consider this approach:

== Minute 1 ==
No valves are open.
You move to valve DD.

== Minute 2 ==
No valves are open.
You open valve DD.

== Minute 3 ==
Valve DD is open, releasing 20 pressure.
You move to valve CC.

== Minute 4 ==
Valve DD is open, releasing 20 pressure.
You move to valve BB.

== Minute 5 ==
Valve DD is open, releasing 20 pressure.
You open valve BB.

== Minute 6 ==
Valves BB and DD are open, releasing 33 pressure.
You move to valve AA.

== Minute 7 ==
Valves BB and DD are open, releasing 33 pressure.
You move to valve II.

== Minute 8 ==
Valves BB and DD are open, releasing 33 pressure.
You move to valve JJ.

== Minute 9 ==
Valves BB and DD are open, releasing 33 pressure.
You open valve JJ.

== Minute 10 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve II.

== Minute 11 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve AA.

== Minute 12 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve DD.

== Minute 13 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve EE.

== Minute 14 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve FF.

== Minute 15 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve GG.

== Minute 16 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You move to valve HH.

== Minute 17 ==
Valves BB, DD, and JJ are open, releasing 54 pressure.
You open valve HH.

== Minute 18 ==
Valves BB, DD, HH, and JJ are open, releasing 76 pressure.
You move to valve GG.

== Minute 19 ==
Valves BB, DD, HH, and JJ are open, releasing 76 pressure.
You move to valve FF.

== Minute 20 ==
Valves BB, DD, HH, and JJ are open, releasing 76 pressure.
You move to valve EE.

== Minute 21 ==
Valves BB, DD, HH, and JJ are open, releasing 76 pressure.
You open valve EE.

== Minute 22 ==
Valves BB, DD, EE, HH, and JJ are open, releasing 79 pressure.
You move to valve DD.

== Minute 23 ==
Valves BB, DD, EE, HH, and JJ are open, releasing 79 pressure.
You move to valve CC.

== Minute 24 ==
Valves BB, DD, EE, HH, and JJ are open, releasing 79 pressure.
You open valve CC.

== Minute 25 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

== Minute 26 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

== Minute 27 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

== Minute 28 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

== Minute 29 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

== Minute 30 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.
This approach lets you release the most pressure possible in 30 minutes with this valve layout, 1651.

Work out the steps to release the most pressure in 30 minutes. What is the most pressure you can release?
 */

class Valve {

    constructor(
        public name: string,
        public rate: number,
        public links: string[]) { }        
}

class Branch {
    constructor(
        public currentValve: string,
        public previousValve: string,
        public openValves: string[],
        public releasedPresure: number,
        public pressurePerTime: number,
    ) { }

    peak(available: number, time: number): number {
        return this.releasedPresure + (available - this.pressurePerTime) * time;
    }

    move(valve: string): Branch|null {
        if (this.previousValve == valve) {
            return null;
        }
        return new Branch(
            valve,
            this.currentValve,
            [...this.openValves],
            this.releasedPresure + this.pressurePerTime,
            this.pressurePerTime
        );
    }

    open(valve: Valve): Branch|null {
        if (this.openValves.includes(valve.name)) {
            return null;
        }
        return new Branch(
            this.currentValve,
            '',
            [...this.openValves, this.currentValve],
            this.releasedPresure + this.pressurePerTime,
            this.pressurePerTime + valve.rate
        );
    }

    stay(): Branch {
        return new Branch(
            '',
            '',
            this.openValves,
            this.releasedPresure + this.pressurePerTime,
            this.pressurePerTime
        );
    }

    uuid(): string {
        if (this.currentValve == '') {
            return 'complete';
        }
        return `${this.currentValve}:${[...this.openValves].sort().join(',')}`
    }
}

type B = Branch|BranchWithElephant

function addRoute<T extends B>(routes: Map<string, T>, branch: T|null) {
    if (!branch) {
        return;
    }
    let uuid = branch.uuid();
    let max = routes.get(uuid); 
    if (!max || max.releasedPresure < branch.releasedPresure) {
        routes.set(uuid, branch);
    }
}

function parseValves(input: string[]): Map<string, Valve> {
    let valves: Map<string, Valve> = new Map();
    for (let line of input) {
        let data = line.match(/Valve (?<name>..) has flow rate=(?<rate>\d+); tunnels? leads? to valves? (?<links>.*)/);
        if (!data || !data.groups) {
            continue;
        }
        valves.set(data.groups.name, new Valve(
            data?.groups.name,
            parseInt(data?.groups.rate),
            data?.groups.links.split(", "),
        ))
    }
    return valves;
}

export function run_part1(input: string[]): number {
    let valves = parseValves(input);

    let bests: Map<string, Branch> = new Map();
    let start = new Branch('AA', '', [], 0, 0)
    bests.set(start.uuid(), start);

    let time = 30;
    let available = [...valves.values()].map(v => v.rate).reduce((a,c) => a+c);

    while (time-- > 0) {
        let max = [...bests.values()].map(b => b.releasedPresure).sort((a,b) => a > b ? -1 : 1)[0];
        bests = new Map([...bests].filter(b => b[1].peak(available, time) >= max));
        let newBests: Map<string, Branch> = new Map();
        for (let branch of bests.values()) {
            if (branch.pressurePerTime == available) {
                let b = branch.stay();
                addRoute(newBests, b);
                continue;
            }
            let currentValve = valves.get(branch.currentValve)
            if (!currentValve) throw new Error(`Unknown valve ${branch.currentValve}`)
            if (currentValve.rate) {
                let b = branch.open(currentValve);
                addRoute(newBests, b);
            }
            for (let other of currentValve.links) {
                let b = branch.move(other);
                addRoute(newBests, b);
            }
        }        
        bests = newBests;
    }
    return [...bests.values()].sort((a,b) => a.releasedPresure > b.releasedPresure ? -1 : 1)[0].releasedPresure;
}

/**
You're worried that even with an optimal approach, the pressure released won't be enough. What if you got one of the elephants to help you?

It would take you 4 minutes to teach an elephant how to open the right valves in the right order, leaving you with only 26 minutes to actually execute your plan. Would having two of you working together be better, even if it means having less time? (Assume that you teach the elephant before opening any valves yourself, giving you both the same full 26 minutes.)

In the example above, you could teach the elephant to help you as follows:

== Minute 1 ==
No valves are open.
You move to valve II.
The elephant moves to valve DD.

== Minute 2 ==
No valves are open.
You move to valve JJ.
The elephant opens valve DD.

== Minute 3 ==
Valve DD is open, releasing 20 pressure.
You open valve JJ.
The elephant moves to valve EE.

== Minute 4 ==
Valves DD and JJ are open, releasing 41 pressure.
You move to valve II.
The elephant moves to valve FF.

== Minute 5 ==
Valves DD and JJ are open, releasing 41 pressure.
You move to valve AA.
The elephant moves to valve GG.

== Minute 6 ==
Valves DD and JJ are open, releasing 41 pressure.
You move to valve BB.
The elephant moves to valve HH.

== Minute 7 ==
Valves DD and JJ are open, releasing 41 pressure.
You open valve BB.
The elephant opens valve HH.

== Minute 8 ==
Valves BB, DD, HH, and JJ are open, releasing 76 pressure.
You move to valve CC.
The elephant moves to valve GG.

== Minute 9 ==
Valves BB, DD, HH, and JJ are open, releasing 76 pressure.
You open valve CC.
The elephant moves to valve FF.

== Minute 10 ==
Valves BB, CC, DD, HH, and JJ are open, releasing 78 pressure.
The elephant moves to valve EE.

== Minute 11 ==
Valves BB, CC, DD, HH, and JJ are open, releasing 78 pressure.
The elephant opens valve EE.

(At this point, all valves are open.)

== Minute 12 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

...

== Minute 20 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.

...

== Minute 26 ==
Valves BB, CC, DD, EE, HH, and JJ are open, releasing 81 pressure.
With the elephant helping, after 26 minutes, the best you could do would release a total of 1707 pressure.

With you and an elephant working together for 26 minutes, what is the most pressure you could release?
 */

class Move {
    constructor (public valve: string) {}
}

class Open {
    constructor (public valve: Valve) {}
}

type Action = Move | Open;

class BranchWithElephant {
    constructor(
        public currentValve1: string,
        public currentValve2: string,
        public openValves: string[],
        public releasedPresure: number,
        public pressurePerTime: number,
    ) { }

    peak(available: number, time: number): number {
        return this.releasedPresure + (available - this.pressurePerTime) * time;
    }

    action(action1: Action, action2: Action): BranchWithElephant {
        let loc1 = this.currentValve1;
        let loc2 = this.currentValve2;
        let rate = this.pressurePerTime;
        let openValves = [...this.openValves];
        if (action1 instanceof Move) {
            loc1 = action1.valve;
        } else {
            openValves.push(action1.valve.name);
            rate += action1.valve.rate;
        }
        if (action2 instanceof Move) {
            loc2 = action2.valve;
        } else if (action1 instanceof Move || action1.valve.name != action2.valve.name) {
            openValves.push(action2.valve.name);
            rate += action2.valve.rate;
        }
        return new BranchWithElephant(
            loc1,
            loc2,
            openValves,
            this.releasedPresure + this.pressurePerTime,
            rate
        );
    }

    stay(): BranchWithElephant {
        return new BranchWithElephant(
            '',
            '',
            this.openValves,
            this.releasedPresure + this.pressurePerTime,
            this.pressurePerTime
        );
    }

    uuid(): string {
        if (this.currentValve1 == '' && this.currentValve2 == '') {
            return 'complete';
        }
        return `${this.currentValve1}:${this.currentValve2}:${[...this.openValves].sort().join(',')}`
    }
}

export function run_part2(input: string[]): number {
    let valves = parseValves(input);

    let bests: Map<string, BranchWithElephant> = new Map();
    let start = new BranchWithElephant('AA', 'AA', [], 0, 0)
    bests.set(start.uuid(), start);

    let time = 26;
    let available = [...valves.values()].map(v => v.rate).reduce((a,c) => a+c);

    while (time-- > 0) {
        let max = [...bests.values()].map(b => b.releasedPresure).sort((a,b) => a > b ? -1 : 1)[0];
        bests = new Map([...bests].filter(b => b[1].peak(available, time) >= max));
        let newBests: Map<string, BranchWithElephant> = new Map();
        console.log(`Start: ${time} - available branches -> ${bests.size} (max: ${max})`)
        for (let branch of bests.values()) {      
            if (branch.pressurePerTime == available) {
                let b = branch.stay();
                addRoute(newBests, b);
                continue;
            }
            let firstAction = [];  
            let v1 = valves.get(branch.currentValve1);

            if (!v1) throw new Error(`Unknown valve ${branch.currentValve1}`)
            if (v1.rate && !branch.openValves.includes(v1.name)) {
                firstAction.push(new Open(v1));
            }
            for (let other of v1.links) {
                firstAction.push(new Move(other));
            }
            for (let action of firstAction) {
                let v2 = valves.get(branch.currentValve2);

                if (!v2) throw new Error(`Unknown valve ${branch.currentValve2}`)
                if (v2.rate && !branch.openValves.includes(v2.name)) {
                    let b = branch.action(action, new Open(v2));
                    addRoute(newBests, b);

                }
                for (let other of v2.links) {
                    let b = branch.action(action, new Move(other));
                    addRoute(newBests, b);
                }
            }            
        }        
        bests = newBests;
        console.log(`End: ${time} - available branches -> ${bests.size}`)
    }
    return [...bests.values()].sort((a,b) => a.releasedPresure > b.releasedPresure ? -1 : 1)[0].releasedPresure;}