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

//remove decimal button after used once
const bottomRow = document.getElementById('bottom-row');
const decbutton = document.getElementById('decbutton');
decbutton.addEventListener('click', function() {
    bottomRow.removeChild(decbutton);
});

//add onclick event listeners to numbuttons and display value in calc display
const numbuttons = document.querySelectorAll('.numbutton');
const displayValue = document.querySelector('#display-value');
let input = '';
numbuttons.forEach(item => {
    item.addEventListener('click', function() {
        if (input.length < 9) {
            input += item.value;
            displayValue.textContent = input;
            parseFloat(input);
            console.log(input);
        }
    });
});