'use strict';
module.exports = solve;

function solve(input, challenge) {
    if (challenge === 1) {
        return input.split`\n`
            .map(e => e.split(/\[|]/g).reduce((a, b, i) => {
                (i%2 ? a.h : a.nh).push(b);
                return a;
            }, {h: [], nh: []}))
            .map(e => {
                return e.nh.reduce((a, b) => /(.)(?!\1)(.)\2\1/.test(b) ? true : a, false) && !e.h.reduce((a, b) => /(.)(?!\1)(.)\2\1/.test(b) ? true : a, false);
            })
            .filter(e => e)
            .length
    } else {

    }
}