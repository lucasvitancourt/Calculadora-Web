let currentExpression = ''; // Para armazenar a expressão completa
let currentNumber = '0';
let operator = '';
let prevNumber = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentExpression || '0'; // Mostra a expressão ou 0 se estiver vazia
}

function appendNumber(number) {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    currentExpression += number; // Atualiza a expressão
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    operator = '';
    prevNumber = '';
    currentExpression = '';
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    prevNumber = currentNumber;
    currentNumber = '0';
    currentExpression += ' ' + op + ' '; // Adiciona o operador à expressão
}

function calculate() {
    const num1 = parseFloat(prevNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    currentNumber = result.toString();
    currentExpression += ' = ' + currentNumber; // Adiciona o resultado à expressão
    updateDisplay();
    operator = '';
    prevNumber = '';
}

updateDisplay();
