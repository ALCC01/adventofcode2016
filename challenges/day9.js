'use strict';
module.exports = solve;

function solve(input, challenge) {
    let d = (input, i) => {
        let z = 0;
        while (input.length > 0) {
            let s = 1;
            if (input[0] === '(') {
                let l = input.match(/\(([0-9]+)x([0-9]+)\)(.*)/);
                s = i ? d(l[3].substr(0, +l[1]), true) * +l[2] : l[3].substr(0, +l[1]).length * +l[2];
                input = l[3].substr(+l[1]);
            } else input = input.substr(1);
            z += s;
        }
        return z;
    };
    if (challenge === 1) return d(input);
    else return d(input, true)
}