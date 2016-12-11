'use strict';
module.exports = solve;

function solve(input, challenge) {
    /*
        - RTGs damage unpowered microchips
        - RTGs can power ONLY their corresponding microchip
            => When in a room with another RTG a microchip MUST be powered
        - The elevator will move only with AT LEAST one component
        - The elevator CANNOT carry more than 2 components
            => Elevator capacity anywhere between 1 and 2
        - The elevator stops each floor allowing the components to interact with those on the floor
        - Every component needs to be carried to the fourth floor
     */
    let floors = input.split`\n`.map((e) => e.split` `.filter(i => i !== 'and' && i !== 'a').splice(4).reduce((a, e, i, o) => (!(i%2) ? (a.push(e.slice(0, 3) + o[i+1][0]), a) : a), [])),
        elevator = [],
        floor = 0,
        moves = 0,
        showf = () => floors.map(e => e.join`\t`).join`\n`,
        empty = (f) => !floors[f].filter(e => e !== 'notr').length;

    /* Just kidding, return a random number */
    return 4; // chosen by fair dice roll
              // guaranteed to be random
}