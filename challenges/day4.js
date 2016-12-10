'use strict';
module.exports = solve;

function solve(input, challenge) {
    if (challenge === 1) {
        var letters  = {};
        return input.split`\n`
            .map(e => e.toUpperCase().split`-`.map((e, i, a) => {
                if (i < a.length - 1) {
                    for (let j = 0; j < e.length; j++) letters[e[j]] = (letters[e[j]] || 0) + 1;
                    return 0;
                } else {
                    var c = Object.keys(letters).sort((a, b) => (letters[a] - letters[b] != 0 ? letters[b]-letters[a] : ((a < b) ? -1 : (a > b) ? 1 : 0))),
                        sector = e.slice(0, 3),
                        chksum = e.slice(4, 9);
                    letters = {};
                    return (c.join``.startsWith(chksum) ? +sector : 0);
                }
            }).reduce((a, b) => a+b)).reduce((a, b) => a+b);
    } else {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return input.split`\n`
            .map(e => {
                e = e.toUpperCase().split`-`;
                var s = +e[e.length -1].slice(0, 3);
                return e.map((f, i, o) => {
                    var r = '';
                    if (i < o.length -1) for (let j = 0; j < f.length; j++) r += a[(a.indexOf(f[j]) + s) % a.length]
                    return (i != 0 && i != o.length -1? ' ' : '') + r;
                }).join`` + ': ' + s
            }).filter(e => e.startsWith('NORTHPOLE OBJECT STORAGE')).join``
    }
}
