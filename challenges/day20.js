'use strict';
module.exports = solve;

function solve(input, challenge) {
    let l, a = 0, c, r;
    input = input.split`\n`.map(e => e.split`-`.map(e => +e)).sort((a, b) => a[0] - b[0]).map(e => {
        c = Math.max(0, e[0] - (l || -1) -1);
        a += c;
        r = c ? (l || -1) +1 : undefined;
        l = Math.max((l || -1), e[1]);
        return r;
    }).filter(e => e).shift();
    a += Math.max(0, 4294967295 - l);
    return (challenge === 1 ? input : a);
}