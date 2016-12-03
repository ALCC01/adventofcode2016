#!/usr/bin/env node
'use strict';

const program = require('commander'),
    fs = require('fs');

program
    .version('1.0.0')
    .description('Solutions for AdventOfCode 2016')
    .arguments('<day> <challenge> [file]')
    .action((day, challenge, file) => {
        if (!file) file = './input.txt';
        day = parseInt(day);
        challenge = parseInt(challenge);
        if (isNaN(day) || isNaN(challenge)) return console.log('Invalid value provided for <day> or <challenge>')
        console.log(`Solving challenge ${day}.${challenge} from input file ${file}`);
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('Solution:', require(`./challenges/day${day}.js`)(data, challenge))
        })
    })
    .parse(process.argv);