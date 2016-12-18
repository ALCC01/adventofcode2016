'use strict';
module.exports = solve;

function solve(input, challenge) {
    let l = challenge === 1? 272 : 35651584;
    console.time('Fill time');
    while (input.length < l) input = input + '0' + input.split``.reverse().map(e => +!+e).join``;
    console.timeEnd('Fill time');
    input = input.substr(0, l).match(new RegExp(`.{1,${l & ~(l-1)}}`, 'g')).map(e => +!((e.split`1`.length - 1)%2));
    return input.join``;
}