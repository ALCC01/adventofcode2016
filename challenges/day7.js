'use strict';
module.exports = solve;

function solve(input, challenge) {
    let ma = (s) => {
        let m = [];
        if (/(.)(?!\1)(.)\1/.test(s)) m.push(s.match(/(.)(?!\1)(.)\1/));
        while((s = s.substr(1)).length) if (/(.)(?!\1)(.)\1/.test(s)) m.push(s.match(/(.)(?!\1)(.)\1/));
        return m.reduce((a, e) => (a.push(e[0][1] + e[0][0] + e[0][1]), a), []);
    };

    input = input.split`\n`.map(e => e.split(/\[|]/g).reduce((a, b, i) => ((i%2 ? a.h : a.nh).push(b), a), {h: [], nh: []}));
    if (challenge === 1) return input.filter(e => e.nh.reduce((a, b) => (/(.)(?!\1)(.)\2\1/.test(b) || a), false) && !e.h.reduce((a, b) => (/(.)(?!\1)(.)\2\1/.test(b) || a), false)).length;
    else return input.filter(e => ma(e.nh.join`\n`).some(aba => e.h.join`_`.indexOf(aba) != -1)).length;
}