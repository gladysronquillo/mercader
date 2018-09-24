var fs = require('fs');
var readLine = require('readline');
const Logic = require('../src/logic.js');

/* TEST 1*/
fs.writeFile('test1.txt', 'pouet is I\n' +
    'plouf is V\n' +
    'cuic is X\n' +
    'boum is L\n' +
    'pouet pouet Empanada is 68 Dollars\n' +
    'pouet plouf Ceviche is 115600 Dollars\n' +
    'cuic cuic Hornado is 15640 Dollars\n' +
    'how much is cuic boum pouet pouet ?', function (err) {
    if (err) throw err;
});
/* ReadStream */
var Reader = readLine.createInterface({
    input : fs.createReadStream('test1.txt'),
    terminal : false
});
/* Process each new line by the Logic function */

test('how much is cuic boum pouet pouet ?', () => {
    var hh;
    Reader.on('line', function (line) {
        Logic.Merchant(line.trim());
        if(Logic.Merchant(line.trim()) != undefined){
            expect(Logic.Merchant(line.trim())).toBe("cuic boum pouet pouet is 42");
        }
    });
});
/* TEST 2*/
fs.writeFile('test2.txt', 'pouet is I\n' +
    'plouf is V\n' +
    'cuic is X\n' +
    'boum is L\n' +
    'pouet pouet Empanada is 68 Dollars\n' +
    'pouet plouf Ceviche is 115600 Dollars\n' +
    'cuic cuic Hornado is 15640 Dollars\n' +
    'how many Dollars is pouet plouf Empanada ?', function (err) {
    if (err) throw err;
});
/* ReadStream */
var Reader2 = readLine.createInterface({
    input : fs.createReadStream('test2.txt'),
    terminal : false
});
/* Process each new line by the Logic function */

test('how many Dollars is pouet plouf Empanada ?', () => {
    Reader2.on('line', function (line) {
        Logic.Merchant(line.trim());
        if(Logic.Merchant(line.trim()) != undefined){
            expect(Logic.Merchant(line.trim())).toBe("pouet plouf Empanada is 136 Dollars");
        }
    });
});


/* TEST 3*/
fs.writeFile('test3.txt', 'pouet is I\n' +
    'plouf is V\n' +
    'cuic is X\n' +
    'boum is L\n' +
    'pouet pouet Empanada is 68 Dollars\n' +
    'pouet plouf Ceviche is 115600 Dollars\n' +
    'cuic cuic Hornado is 15640 Dollars\n' +
    'how many Dollars is pouet plouf Ceviche ?', function (err) {
    if (err) throw err;
});
/* ReadStream */
var Reader3 = readLine.createInterface({
    input : fs.createReadStream('test3.txt'),
    terminal : false
});
/* Process each new line by the Logic function */

test('how many Dollars is pouet plouf Ceviche ?', () => {
    Reader3.on('line', function (line) {
        Logic.Merchant(line.trim());
        if(Logic.Merchant(line.trim()) != undefined){
            expect(Logic.Merchant(line.trim())).toBe("pouet plouf Ceviche is 115600 Dollars");
        }
    });
});

/* TEST 4*/
fs.writeFile('test4.txt', 'pouet is I\n' +
    'plouf is V\n' +
    'cuic is X\n' +
    'boum is L\n' +
    'pouet pouet Empanada is 68 Dollars\n' +
    'pouet plouf Ceviche is 115600 Dollars\n' +
    'cuic cuic Hornado is 15640 Dollars\n' +
    'how many Dollars is pouet plouf Hornado ?', function (err) {
    if (err) throw err;
});
/* ReadStream */
var Reader4 = readLine.createInterface({
    input : fs.createReadStream('test4.txt'),
    terminal : false
});
/* Process each new line by the Logic function */

test('how many Dollars is pouet plouf Hornado ?', () => {
    Reader4.on('line', function (line) {
        Logic.Merchant(line.trim());
        if(Logic.Merchant(line.trim()) != undefined){
            expect(Logic.Merchant(line.trim())).toBe("pouet plouf Hornado is 3128 Dollars");
        }
    });
});

/* TEST 5*/
fs.writeFile('test5.txt', 'pouet is I\n' +
    'plouf is V\n' +
    'cuic is X\n' +
    'boum is L\n' +
    'pouet pouet Empanada is 68 Dollars\n' +
    'pouet plouf Ceviche is 115600 Dollars\n' +
    'cuic cuic Hornado is 15640 Dollars\n' +
    'how much bread enters in a bakery during a full-moon night?', function (err) {
    if (err) throw err;
});
/* ReadStream */
var Reader5 = readLine.createInterface({
    input : fs.createReadStream('test5.txt'),
    terminal : false
});
/* Process each new line by the Logic function */

test('how much bread enters in a bakery during a full-moon night?', () => {
    Reader5.on('line', function (line) {
        Logic.Merchant(line.trim());
        if(Logic.Merchant(line.trim()) != undefined){
            expect(Logic.Merchant(line.trim())).toBe("What are you talking about really?");
        }
    });
});

