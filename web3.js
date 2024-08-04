let displayElement = document.getElementById("display");
let currentInput = "";
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = number.toString();
        resultDisplayed = false;
    } else {
        if (currentInput === "0" && number !== ".") {
            currentInput = number.toString();
        } else {
            currentInput += number.toString();
        }
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (resultDisplayed) {
        resultDisplayed = false;
    }
    const lastChar = currentInput.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLast() {
    if (!resultDisplayed) {
        currentInput = currentInput.slice(0, -1);
        if (currentInput === "") {
            currentInput = "0";
        }
        updateDisplay();
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        resultDisplayed = true;
    } catch {
        currentInput = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentInput;
}
