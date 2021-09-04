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

//add onclick event listeners to numbuttons and display value in calc display
const numbuttons = document.querySelectorAll('.numbutton');
const displayValue = document.querySelector('#display-value');
const decbutton = document.getElementById('decbutton');
let input = '';

numbuttons.forEach(item => {
    item.addEventListener('click', function concat() {
        if (input.length < 9) {
            input += item.value;
            displayValue.textContent = input;
            parseFloat(input);
            decbutton.removeEventListener('click', concat);
            console.log(input);
        } //else do nothing
    });
});