'use strict';
module.exports = solve;

function solve(input, challenge) {
    // It's so simple I must have hit an edge case
    return (3-challenge)*(+input - Math.pow(challenge + 1, Math.floor(Math.log(+input) / Math.log(challenge + 1)))) + (2-challenge);
}
