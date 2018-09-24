/* Units: Empanada, Ceviche, Hornado */
var Units = {};

/* Different types of currencies and their conversion rates */
var Currency = {};

/* Martian numbers allowed */
const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

/* Values Martian number */
const symbolsVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

/* Se valida que las entradas sean válidas */
const isValueInput = new RegExp(/^[a-z]+\s+is\s+([I|V|X|L|C|D|M])$/i);
const isDollarsInput = new RegExp(/^([a-z\s]+)is\s+(\d+.?\d*)\s+Dollars$/i);
const howMuchInput = new RegExp(/^how\s+much\s+is\s+([a-z\s]+)[?]$/i);
const howManyDollarsInput = new RegExp(/^how\s+many\s+Dollars\s+is\s+([a-z\s]+)[?]$/i);

/* Regular expression to validate roman numeral */
const isValidSymbol = new RegExp(/^([I|X|C|M]{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

/*Merchants-guide-to-galaxy-Node.js
 * Use This function to convert inter-galaxy currency to it's value. Function
 * Works as follows,
 * 1)Convert inter-Galaxy currency array to respective roman
 * numeral,while converting use saved inter-galaxy currency for conversion.
 * 2)Check if constructed roman numeral is valid.
 * 3)Convert that roman numeral
 * to decimal number.
 */
function currencyToValue(CurrencyArr) {
    var symbolString = "";
    var answer = 0;
    for (var elem = 0; elem < CurrencyArr.length; elem++) {
        if (Currency[CurrencyArr[elem].toLowerCase()]) {
            symbolString += Currency[CurrencyArr[elem].toLowerCase()];
        } else if (Units[CurrencyArr[elem].toLowerCase()]) {
            CurrencyArr[elem] + " is not currency, It is unit";
            return -1;
        } else {
            "Unknow currency " + CurrencyArr[elem] + " is required";
            return -1;
        }
    }
    if (!isValidSymbol.test(symbolString)) {
        "Invalid amount " + CurrencyArr.join(" ");
        return -1;
    }
    var digits = [];
    symbolString.split("").forEach((e, i, arr) => {
        digits.push(symbolsVal[e]);
        if (symbolsVal[e] < symbolsVal[arr[i + 1]]) {
            digits[i] *= -1;
        }
    });
    answer = digits.reduce((sum, elt) => {
        return sum + elt;
    });
    return answer;
}

function processValue(execInput) {
    var partials = execInput[0].split(/\s+/);
    if (!Currency[partials[0].toLowerCase()]) {
        var index = symbols.indexOf(partials[2].toUpperCase());
        if (index > -1) {
            Currency[partials[0].toLowerCase()] = partials[2].toUpperCase();
            symbols.splice(index, 1);
        }
    }
    return;
}

function processDollars(execInput) {
    var dollarsVal = parseFloat(execInput[2]);
    var partials = execInput[1].trim();
    if (partials === "") {
        return "Please provide a currency";
    }
    partials = partials.split(/\s+/);
    var unit = partials.pop();
    if (Currency[unit.toLowerCase()]) {
        return unit + " is currency, provide a unit";
    }
    if (partials.length < 1) {
        return "No currency was provided";
    }
    var value = currencyToValue(partials);
    if (value !== -1) {
        value = dollarsVal / value;
        Units[unit.toLowerCase()] = value;
    } else {
        return "Invalid currency";
    }
    return;
}

function processHowMuch(execInput) {
    var partials = execInput[1].trim();
    if (partials === "") {
        return "Please provide any currency";
    }
    partials = partials.split(/\s+/);
    var value = currencyToValue(partials);
    if (value !== -1) {
        return partials.join(" ") + " is " + value;
    } else {
        return "Invalid currency";
    }
}

function processHowManyDollars(execInput) {
    var partials = execInput[1].trim();
    if (partials === "") {
        return "Please provide any currency";
    }
    partials = partials.split(/\s+/);
    var unit = partials.pop();
    if (!Units[unit.toLowerCase()]) {
        return "No unit provided";
    }
    if (partials.length < 1) {
        return "No currency provided";
    }
    var value = currencyToValue(partials);
    if (value !== -1) {
        value *= Units[unit.toLowerCase()];
        return execInput[1].trim() + " is " + value + " Dollars";
    } else {
        return "Invalid currency";
    }
}

/*
 * Public function to process inputs and to do inter-Galaxy currency
 * conversions.input is validated against regular expressions and if valid
 * respective input part is processes further.
 */
//module.exports.processHowManyDollars = processHowManyDollars;
module.exports.Merchant = (input) => {
    var execAnswer = null;
    execAnswer = isValueInput.exec(input);
    if (execAnswer !== null) {
        return processValue(execAnswer);
    }
    execAnswer = isDollarsInput.exec(input);
    if (execAnswer !== null) {
        return processDollars(execAnswer);
    }
    execAnswer = howMuchInput.exec(input);
    if (execAnswer !== null) {
        return processHowMuch(execAnswer);
    }
    execAnswer = howManyDollarsInput.exec(input);
    if (execAnswer !== null) {
        return processHowManyDollars(execAnswer);
    }
    return "What are you talking about really?";
};