let savedInputs = [""]
let displayableInputs = [""]
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
displayableInputs = [""]
return displayableInputs
    })
})
buttons.forEach(button =>{
button.addEventListener("click", function() {
    if(["*", "+", "/", "-"].includes(button.id)) {
displayableInputs = [""]
savedInputs.push(button.id)
    } else {
displayableInputs.push(button.id)
showResult()
    }
})
})

clearAll.addEventListener("click", function(){
displayableInputs = [""]
savedInputs = [""]
return displayableInputs, savedInputs
}
)
