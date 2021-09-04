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
    if (operator == add) {
        add(x, y);
    } else if (operator == subtract) {
        subtract(x, y);
    } else if (operator == multiply) {
        multiply(x, y);
    } else if (operator == divide) {
        divide(x, y);
    }
}

//initialize variables
let input = '';

// //add onclick event listeners to buttons and store value in variable
const buttons = document.querySelectorAll('.button');
const displayValue = document.querySelector('#display-value');
buttons.forEach(item => {
    item.addEventListener('click', function() {
        if (input < 100000000) {
            input += item.value;
            displayValue.textContent = input;
            console.log(input);
        }
    });
});