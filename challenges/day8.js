'use strict';
module.exports = solve;

function solve(input, challenge) {
    const w = 50,
        h = 6,
        g = [];
    for (let i = 0; i < h; i++) {
        g[i] = [];
        for (let j = 0; j < w; j++) {
            g[i][j] = false;
        }
    }
    const rect = (x, y) => {
            for (let i = 0; i < y; i++) {
                for (let j = 0; j < x; j++) {
                    g[i][j] = true
                }
            }
        },
        rotate_col = (x, a) => {
            while (a--) {
                let c = g[h-1][x];
                for (let i = h-1; i >= 0; i--) {
                    g[i][x] = i > 0 ? g[i-1][x] : c ;
                }
            }
        },
        rotate_row = (y, a) => {
            while (a--) {
                let c = g[y][w-1];
                for (let i = w-1; i >= 0; i--) {
                    g[y][i] = i > 0 ? g[y][i-1] : c ;
                }
            }
        },
        show_grid = () => g.map(e => e.map(f => f ? '#' : '.').join` `).join`\n`;

    input.split`\n`
        .forEach(e => {
            e = e.split` `;
            if (e[0] == 'rect') rect(+e[1].slice(0, e[1].indexOf('x')), +e[1].slice(e[1].indexOf('x') + 1));
            if (e[1] == 'column') rotate_col(+e[2].slice(e[2].indexOf('=') +1), +e[4]);
            if (e[1] == 'row') rotate_row(+e[2].slice(e[2].indexOf('=') +1), +e[4]);
        });

    if (challenge === 1) {
        return g.reduce((a, b) => a.concat(b), [])
            .filter(e => e)
            .length
    } else {
        return '\n' + show_grid();
    }
}