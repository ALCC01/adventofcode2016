'use strict';
module.exports = solve;

function solve(input, challenge) {
    if (challenge === 1) {
        (input = input.split`\n`).splice(0, 2);
        return input.map(e => {
            e = e.split(/ +/);
            return {
                n: e[0],
                s: +(e[1].slice(0, -1)),
                u: +(e[2].slice(0, -1)),
                a: +(e[3].slice(0, -1)),
                up: +(e[4].slice(0, -1))
            }
        }).reduce((a, e, i, o) => {
            console.log(e);
            o.forEach(f => {
                if (e.u != 0 && e.n != f.n && e.u <= f.a) a++;
            });
            return a;
        }, 0)
    } else {

    }
}