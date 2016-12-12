'use strict';
module.exports = solve;

function solve(input, challenge) {
    let r = {a: 0, b: 0, c: challenge-1, d: 0},
        i = 0,
        cpy = (n, a) => (r[a] = (isNaN(+n) ? r[n] : +n), 1),
        inc = a => (r[a]++, 1),
        dec = a => (r[a]--, 1),
        jnz = (a, n) => r[a] != 0 ? +n : 1;
    input = input.split`\n`.map(e => e.split` `);

    while (i < input.length) i += (input[i][0] == 'cpy' ? cpy(input[i][1], input[i][2]) : 0 || input[i][0] == 'inc' ? inc(input[i][1]) : 0 || input[i][0] == 'dec' ?  dec(input[i][1]) : 0 || input[i][0] == 'jnz' ? jnz(input[i][1], input[i][2]) : 0);
    return r.a;
}