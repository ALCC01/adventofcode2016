'use strict';
module.exports = solve;

function solve(input, challenge) {
    let grid = [],
        w = 31,
        h = 39;
    for (let i = 0; i <= h*2; i++) {for (let j = 0; j <= w*2; j++) grid.push({i: (w*2+1)*i+j, x: j, y: i, g: j !== 1 || i !== 1 ? Infinity : 0, e: false, a:!((((j*j + 3*j + 2*j*i + i + i*i) + +input >>> 0).toString(2).match(/1/g) || []).length % 2)})}
    if (challenge === 1) {
        while (grid.filter(e => !e.e && e.a).length) {
            let curr = grid.filter(e => e.a && !e.e).sort((a, b) => a.g < b.g ? -1 : (a.g == b.g ? 0 : 1))[0],
                neighbors = [curr.i + 1, curr.i - 1, curr.i - w * 2 - 1, curr.i + w * 2 + 1].filter(e => grid[e] ? grid[e].a && !grid[e].e : false).map(e => grid[e]);
            if (curr.x === w && curr.y === h) return curr.g;
            grid[curr.i].e = true;
            neighbors.forEach(e => curr.g +1 < e.g && e.a ? grid[e.i].g = curr.g +1 : 0);
        }
    } else {

    }
}