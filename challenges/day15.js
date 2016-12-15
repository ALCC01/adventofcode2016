'use strict';
module.exports = solve;

function solve(input, challenge) {
    let p = [],
        t = 0,
        d = input.split`\n`.map(e => {
            e = e.split` `;
            return [+e[3], +e[11].substr(0, e[11].indexOf('.'))]
        });
    if (challenge !== 1) d.push([11, 0]);
    while (!p.length || !p.every((e, i) => e === 0)) {
        p = [];
        d.forEach((e, i) => p.push((e[1] + t + i + 1)%e[0]));
        t++;
    }
    return t-1;
}