let savedInputs = []
let displayableInputs = []
let isOperatorUsed = false;
const output = document.querySelector(".output")

function showResult() {
    const displayText = displayableInputs.join("")
    output.innerText = displayText;
    return output
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




clearAll.addEventListener("click", function(){
    displayableInputs = []
    savedInputs = []
    isOperatorUsed = false
}
)
