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
    makeEquation()
    const regex = /(-?\d+)([+*\/-])(-?\d+)/; 
    splitInputs = combinedInputs.match(regex)
    firstNumbers = splitInputs[0] 
    operator = splitInputs[1]
    secondNumbers = splitInputs[2] 
})


clearAll.addEventListener("click", function(){
    displayableInputs = []
    savedInputs = []
    isOperatorUsed = false
}
)
