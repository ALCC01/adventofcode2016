'use strict';
module.exports = solve;

function solve(input, challenge) {
    let bots = [],
        outputs = [],
        comparing = [61, 17];
    input
        .split`\n`
        .map(e => {
            e = e.split` `;
            if (e[0] == 'value') {
                if (!bots[+e[5]]) bots[+e[5]] = {h: {t: undefined, n: undefined}, l: {t: undefined, n: undefined}, v: []};
                bots[+e[5]].v.push(+e[1])
            } else {
                if (!bots[+e[1]]) bots[+e[1]] = {h: {t: undefined, n: undefined}, l: {t: undefined, n: undefined}, v: []};
                bots[+e[1]].l = {t: e[5], n: +e[6]};
                bots[+e[1]].h = {t: e[10], n: +e[11]}
            }

        });
    while (bots.some(e => e.v.length)) {
        for (let i = 0; i < bots.length; i++) {
            if (bots[i].v.length > 1) {
                let b = bots[i];
                b.v.sort((x, y) => (x === y ? 0 : (x > y ? 1 : -1)));
                (b.h.t == 'output' ? (outputs[b.h.n] ? outputs[b.h.n] : outputs[b.h.n] = []) : bots[b.h.n].v).push(b.v[1]);
                (b.l.t == 'output' ? (outputs[b.l.n] ? outputs[b.l.n] : outputs[b.l.n] = []) : bots[b.l.n].v).push(b.v[0]);
                if (comparing.sort().join` ` == b.v.sort().join` ` && challenge === 1) return i;
                bots[i].v = [];
            }
        }
    }
    return outputs[0][0] * outputs[1][0] * outputs[2][0]
}