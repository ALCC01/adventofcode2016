'use strict';
module.exports = solve;

function solve(input, challenge) {
    var count = 0,
        data = input.split`\n`.map(e => e.split(/ +/g).splice(1, 3).map(s => +s));
    if (challenge === 1) {
        return data.map((e) => +(e[0] + e[1] > e[2] && e[1] + e[2] > e[0] && e[0] + e[2] > e[1])).reduce((a, e) => a+e)
    } else {
        data.forEach((v, i, a) => {
            if (!(i%3)) {
                for (let l = 0; l < 3; l++) {
                    var e = [a[i][l], a[i+1][l], a[i+2][l]];
                    if (e[0] + e[1] > e[2] &&
                        e[1] + e[2] > e[0] &&
                        e[0] + e[2] > e[1]) count++;
                }
            }
        });
    }
    return count
}