let savedInputs = [""]
const output = document.querySelector(".output")
function showResult() {
    const displayText = savedInputs.join("")
    output.innerText = displayText;
    
    return output

}

const calculator = document.querySelector(".calc")
const buttons = document.querySelectorAll("button")

buttons.forEach(button =>{
button.addEventListener("click", function() {
savedInputs.push(button.id)
showResult()
})
})


