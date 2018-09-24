/* Import required Modules and logic file*/
var fs = require('fs');
var readLine = require('readline');
var Logic = require('./logic.js');

/* ReadStream */
var Reader = readLine.createInterface({
    input: fs.createReadStream('./input.txt'),
    terminal: false
});

/* Process each new line by the Logic function */
Reader.on('line', function (line) {
    if (Logic.Merchant(line.trim())){
        console.log(Logic.Merchant(line.trim()));
    }
});

process.on('uncaughtException', function (err) {
    console.log(err);
});