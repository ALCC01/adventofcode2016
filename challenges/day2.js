'use strict';
module.exports = (input, challenge) => {
    return challenge === 1 ? solve(input, k1, c1) : solve(input, k2, c2);
};

var dir = {U: {x: 0, y: -1}, D: {x: 0, y: 1}, L: {x: -1, y: 0}, R: {x: 1, y:0}},
    k1 = [[1,2,3], [4,5,6], [7,8,9]],
    k2 = [[0,0,1,0,0], [0,2,3,4,0], [5,6,7,8,9], [0,'A','B','C',0], [0,0,'D',0,0]],
    c1 = [1,1],
    c2 = [2,0];

function solve(input, keypad, coords) {
    let attempt;
    return input.split`\n`.map(line => line.split``.reduce((a, c) => (attempt = [coords[0] + dir[c].y, coords[1] + dir[c].x], coords = (keypad[attempt[0]] && keypad[attempt[0]][attempt[1]] ? attempt : coords)))).map(e => keypad[e[0]][e[1]]).join``
}