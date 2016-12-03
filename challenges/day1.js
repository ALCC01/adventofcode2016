'use strict';
module.exports = solve;

function solve(input, challenge) {
    var dir = [{x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}, {x: 0, y: -1}],
        x = 0,
        y = 0,
        facing = 0,
        locations = [],
        duplicate = undefined;

    input.split(', ').forEach(i => {
        facing = (i[0] == 'R' ? facing + 1 : facing + 3) % 4;
        if (!duplicate) {
            for (let z = 0; z < i.substring(1); z++) {
                x += dir[facing].x;
                y += dir[facing].y;
                var loc = x + ',' + y;
                if (locations.indexOf(loc) > -1) duplicate = {x: x, y: y};
                else locations.push(loc)
            }
        } else {
            x += dir[facing].x * i.substring(1);
            y += dir[facing].y * i.substring(1);
        }
    });
    return challenge === 1 ? Math.abs(x) + Math.abs(y) : Math.abs(duplicate.x) + Math.abs(duplicate.y);
}