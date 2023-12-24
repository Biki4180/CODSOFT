let displayValue = '';
let operator = '';
let firstOperand = '';

function handleButtonClick(event) {
    const button = event.target;
    const buttonValue = button.dataset.value;
    const buttonOperator = button.dataset.operator;
    const buttonClear = button.dataset.clear;

    if (buttonValue !== undefined) {
        appendNumber(buttonValue);
    } else if (buttonOperator !== undefined) {
        setOperator(buttonOperator);
    } else if (buttonClear !== undefined) {
        clearDisplay();
    } else {
        calculateResult();
    }
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(selectedOperator) {
    operator = selectedOperator;
    firstOperand = displayValue;
    displayValue = '';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    if (operator && firstOperand && displayValue) {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(displayValue);

        switch (operator) {
            case '+':
                displayValue = num1 + num2;
                break;
            case '-':
                displayValue = num1 - num2;
                break;
            case '*':
                displayValue = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    displayValue = num1 / num2;
                } else {
                    displayValue = 'Error';
                }
                break;
            default:
                displayValue = 'Error';
        }

        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
