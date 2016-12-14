'use strict';
module.exports = solve;
const crypto = require('crypto');


function solve(input, challenge) {
    let mh = (i, s) => {
            while (i--) s = crypto.createHash('md5').update(s).digest('hex').toLowerCase();
            return s;
        },
        i = 0,
        t = {},
        ks = [],
        h;
    while (!Object.keys(t).slice(0, 64).every(e => t[e][2]) || ks.length < 64) {
        h = challenge === 1 ? crypto.createHash('md5').update(input + i).digest('hex').toLowerCase() : mh(2016, crypto.createHash('md5').update(input + i).digest('hex').toLowerCase());
        Object.keys(t).forEach(k => {
            if (i <= k) {
                let e = t[k];
                if (h.indexOf(e[0]) !== -1 && !e[2]) {
                    ks.push([e[1], e[3]]);
                    t[k][2] = true;
                }
            } else if (!t[k][2]) delete t[k];
        });
        let m = h.match(/(.)\1\1/);
        if (m) t[i+1000] = [`${m[1]}${m[1]}${m[1]}${m[1]}${m[1]}`, h, false, i];

        i++;
    }
    return ks[63][1];
}