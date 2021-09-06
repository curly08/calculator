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

//function to calculate and display result
function operate(operator, x, y) {
    if (operator == 'add') {
        input = add(x, y);
        displayResult(input);
    } else if (operator == 'subtract') {
        input = subtract(x, y);
        displayResult(input);
    } else if (operator == 'multiply') {
        input = multiply(x, y);
        displayResult(input);
    } else if (operator == 'divide') {
        input = divide(x, y);
        displayResult(input);
    }
}

//function for displaying result
function displayResult(result) {
    if (result > 999999999) {
        displayValue.textContent = formatExponential(result);
    } else if (result.toString().length > 9) {
        displayValue.textContent = Math.round(result * 10000000) / 10000000;
    } else {
        displayValue.textContent = result;
    }
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

//add onclick event listeners to numbuttons and display value in calc display
const numbuttons = document.querySelectorAll('.numbutton');
const displayValue = document.querySelector('#display-value');
const decbutton = document.getElementById('decimal-button');
let input = '';
let x;
let y;
let operator;

numbuttons.forEach(item => {
    item.addEventListener('click', concatInput)
});

//concat function
function concatInput() {
    if (input.length < 9) {
        input += this.value;
        displayValue.textContent = input;
        if (input.includes('.')) {
            decbutton.removeEventListener('click', concatInput);
        }
    }
}

//add onclick event listeners to opbuttons and store input in x
const opbuttons = document.querySelectorAll('.opbutton');
opbuttons.forEach(item => {
    item.addEventListener('click', function getOperator() {
        // //conditional when operator functions as equals button
        // if {

        // }
        decbutton.addEventListener('click', concatInput);
        operator = item.value;
        displayValue.textContent = operator;
        x = parseFloat(input);
        input = '';
        return operator;
    });
});

//add onclick event listener for equals and store input in y
const equalsbutton = document.getElementById('equals-button');
equalsbutton.addEventListener('click', function calculate() {
    y = parseFloat(input);
    input = '';
    console.log(x);
    console.log(operator);
    console.log(y);
    operate(operator, x, y);
});