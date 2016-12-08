'use strict';
module.exports = solve;
const crypto = require('crypto');

function solve(input, challenge) {
    var i = -1,
        j = ('12345678' + input).slice(-8).split``;
    if (challenge === 1) {
        return j.map(() => {
            var s = true;
            for (i += 1; s; i++) {
                let h = crypto.createHash('md5').update(input + i).digest('hex');
                if (h.startsWith('00000')) {
                    s = false;
                    return h[5];
                }
            }
        })
            .join``
    } else {
        var r = new Array(8).fill('_');
        j.map(() => {
            var s = true;
            for (i += 1; s; i++) {
                let h = crypto.createHash('md5').update(input + i).digest('hex');
                if (h.startsWith('00000') && !isNaN(+h[5]) && +h[5] < 8 && r[+h[5]] == '_') {
                    s = false;
                    r[+h[5]] = h[6];
                }
            }
        }).join``;
        return r.join``;
    }
}