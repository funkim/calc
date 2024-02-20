let savedInputs = []
let displayableInputs = []
let isOperatorUsed = false;
const output = document.querySelector(".output")

function showResult() {
    const displayText = displayableInputs.join("")
    output.innerText = displayText;
}
const calculator = document.querySelector(".calc")
const buttons = document.querySelectorAll("button")
const clear = document.querySelectorAll(".Clear")
const clearAll = document.querySelector(".ClearAll")
const enter = document.querySelector(".Enter")

clear.forEach(button =>{
    button.addEventListener("click", function() {
    displayableInputs = []
    isOperatorUsed = false
    })
})
buttons.forEach(button =>{
    button.addEventListener("click", function() {
    if(["*", "+", "/", "-"].includes(button.id)) {
        savedInputs.push(button.id)
        isOperatorUsed = true;
    } else {
    if (isOperatorUsed) {
        displayableInputs = [];
        isOperatorUsed = false;
    }
        savedInputs.push(button.id)
        displayableInputs.push(button.id)
        showResult();
        }
    }); 
});

function makeEquation() {
    combinedInputs = savedInputs.join("")
}

enter.addEventListener("click", function() {
    displayableInputs = []
    makeEquation()
    const regex = /(-?\d+)([+*\/-])(-?\d+)/; 
    const splitInputs = combinedInputs.match(regex)
    let firstNumber = splitInputs[1] 
    let operator = splitInputs[2]
    let secondNumber = splitInputs[3] 
    if (splitInputs) {
        firstNumber = parseFloat(splitInputs[1]); 
        operator = splitInputs[2];
        secondNumber = parseFloat(splitInputs[3]); 

        let result;
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                result = 'Invalid operator';
        }

        if (result % 1 !== 0) {
        output.innerText = Number(result.toString()).toFixed(2);
        } else {
        output.innerText = result.toString();
        }
    } else {
        output.innerText = 'Invalid input';
    }

    displayableInputs = [];
});

clearAll.addEventListener("click", function(){
    displayableInputs = []
    savedInputs = []
    isOperatorUsed = false
    showResult()
}
)
