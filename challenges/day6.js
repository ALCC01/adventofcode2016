'use strict';
module.exports = solve;

function solve(input, challenge) {
    var a = [],
        t = input.split`\n`
            .reduce((a, e) => {
                for (let i = 0; i < e.length; i++) a[i][e[i]] = (a[i][e[i]] || 0) +1;
                return a;
            }, Array.apply(null, new Array(input.indexOf(`\n`))).map(() => {return {}}));
    if (challenge === 1) return t.map(e => Object.keys(e).reduce(function(a, b) { return e[b] > (a ? e[a] : -1) ? b : a }, undefined)).join``;
    else return t.map(e => Object.keys(e).reduce(function(a, b) { return e[b] < (a ? e[a] : +Infinity) ? b : a }, undefined)).join``
}