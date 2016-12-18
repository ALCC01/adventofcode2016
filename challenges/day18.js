'use strict';
module.exports = solve;

function solve(input, challenge) {
    let f = [input.split``],
        c = (input.match(/\./g) || []).length;
    while (f.length < (challenge === 1 ? 40 : 400000)) f.push(f[f.length-1].map((e, i) => (f[f.length-1][i-1] || '.') != (f[f.length-1][i+1] || '.') ? '^': (c++, '.')));
    return c;
}
