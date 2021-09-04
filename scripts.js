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

function operate(operator, x, y) {
    if (operator == 'add') {
        input = add(x, y);
        displayValue.textContent = input;
    } else if (operator == 'subtract') {
        input = subtract(x, y);
        displayValue.textContent = input;
    } else if (operator == 'multiply') {
        input = multiply(x, y);
        displayValue.textContent = input;
    } else if (operator == 'divide') {
        input = divide(x, y);
        displayValue.textContent = input;
    }
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
    item.addEventListener('click', function concat() {
        if (input.length < 9) {
            input += item.value;
            displayValue.textContent = input;
            decbutton.removeEventListener('click', concat); //this prevents other inputs from including a decimal
            return input;
        } //else do nothing
    });
});

//add onclick event listeners to opbuttons and store input in x
const opbuttons = document.querySelectorAll('.opbutton');
opbuttons.forEach(item => {
    item.addEventListener('click', function() {
        // //conditional when operator functions as equals button
        // if {

        // }
        operator = item.value;
        displayValue.textContent = operator;
        x = parseFloat(input);
        input = '';
        return operator;
    });
});

//add onclick event listener for equals and store input in y
const equalsbutton = document.getElementById('equals-button');
equalsbutton.addEventListener('click', function() {
    y = parseFloat(input);
    input = '';
    console.log(x);
    console.log(operator);
    console.log(y);
    operate(operator, x, y);
});