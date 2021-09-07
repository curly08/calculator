//initialize variables
const numButtons = document.querySelectorAll('.numbutton');
const displayValue = document.querySelector('#display-value');
const decButton = document.getElementById('decimal-button');
const opButtons = document.querySelectorAll('.opbutton');
const equalsButton = document.getElementById('equals-button');
const clearButton = document.getElementById('clear-button');
let input = '';
let result = '';
let x;
let y = '';
let operator = '';

//operation functions
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

//function to format exponential numbers
function formatExponential(result) {
    result = result.toExponential();
    let index = result.indexOf('e');
    let notation = result.substr(index);
    let notationless = result.substr(0, index);
    let fixedNotationless = Number.parseFloat(notationless).toFixed(5);
    let stringNotationless = String(fixedNotationless);
    return stringNotationless.concat(notation);
}

//function to round big numbers with long decimal trails appropriately
function round(result) {
    if (result > 99999999 && result <= 999999999) {
        return Math.round(result * 100) / 100;
    } else if (result > 9999999 && result <= 99999999) {
        return Math.round(result * 100) / 100;
    } else if (result > 999999 && result <= 9999999) {
        return Math.round(result * 100) / 100;
    } else if (result > 99999 && result <= 999999) {
        return Math.round(result * 100) / 100;
    } else if (result > 9999 && result <= 99999) {
        return Math.round(result * 1000) / 1000;
    } else if (result > 999 && result <= 9999) {
        return Math.round(result * 10000) / 10000;
    } else if (result > 99 && result <= 999) {
        return Math.round(result * 100000) / 100000;
    } else if (result > 9 && result <= 99) {
        return Math.round(result * 1000000) / 1000000;
    } else if (result > 0 && result <= 9) {
        return Math.round(result * 10000000) / 10000000;
    }
}

//function for displaying result
function displayResult(result) {
    if (result > 999999999) {
        displayValue.textContent = formatExponential(result);
    } else if (result.toString().length > 9) {
        displayValue.textContent = round(result);
    } else {
        displayValue.textContent = result;
    }
}

//function to calculate and display result
function operate(operator, x, y) {
    if (operator == 'add') {
        input = add(x, y);
        result = input;
        displayResult(input);
    } else if (operator == 'subtract') {
        input = subtract(x, y);
        result = input;
        displayResult(input);
    } else if (operator == 'multiply') {
        input = multiply(x, y);
        result = input;
        displayResult(input);
    } else if (operator == 'divide') {
        input = divide(x, y);
        result = input;
        displayResult(input);
    }
}

//concat function
function concatInput() {
    if (input.length < 9) {
        input += this.value;
        displayValue.textContent = input;
        if (input.includes('.')) {
            decButton.removeEventListener('click', concatInput);
        }
    }
    if (operator != '' && x != 0) {
        equalsButton.addEventListener('click', calculate);
    }
    opButtons.forEach(item => {
        item.addEventListener('click', getOperator)
    });
}

//getOperator function
function getOperator() {
    if (operator != '') {
        y = parseFloat(input);
        calculate();
        x = result;
        operator = this.value;
    } else {
        x = parseFloat(input);
        operator = this.value;
        displayValue.textContent = operator;
    }
    opButtons.forEach(item => {
        item.removeEventListener('click', getOperator)
    });
    decButton.addEventListener('click', concatInput);
    input = '';
}

//calculate function
function calculate() {
    y = parseFloat(input);
    input = ''; //move to operate?
    // console.log(x);
    // console.log(operator);
    // console.log(y);
    operate(operator, x, y);
    operator = ''; //move to operate?
    opButtons.forEach(item => {
        item.addEventListener('click', getOperator)
    });
    equalsButton.removeEventListener('click', calculate);
}

//clear all function
function clear() {
    x = '';
    y = '';
    input = '';
    result = '';
    operator = '';
    equalsButton.removeEventListener('click', calculate);
    decButton.addEventListener('click', concatInput);
    opButtons.forEach(item => {
        item.removeEventListener('click', getOperator)
    });
    displayValue.textContent = 'clear';
}

//add onclick event listeners to numbuttons and display value in calc display
numButtons.forEach(item => {
    item.addEventListener('click', concatInput)
});

//add onclick event listener to clear button
clearButton.addEventListener('click', clear);