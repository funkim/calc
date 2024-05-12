export function setValues() {
  const savedInputs = [];
  const displayedInputs = [];
  const isOperatorUsed = false;
  return [savedInputs, displayedInputs, isOperatorUsed];
}

export function displayCalc() {
  const calculator = document.querySelector(".calc");
  const buttons = document.querySelectorAll("button");
  const clear = document.querySelectorAll(".clear");
  const clearAll = document.querySelector(".clearAll");
  const enter = document.querySelector(".enter");
  const output = document.querySelector(".output");
  return [calculator, buttons, clear, clearAll, enter, output];
}

function showResult(displayedInputs, output) {
  const displayText = displayedInputs.join("");
  output.innerText = displayText;
}

export function clickButtons(
  displayedInputs,
  savedInputs,
  isOperatorUsed,
  buttons,
  clear,
  clearAll,
  enter,
  output
) {
  clear.forEach((button) => {
    button.addEventListener("click", function () {
      displayedInputs.length = 0;
      isOperatorUsed = false;
      showResult(displayedInputs, output);
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const operators = ["*", "+", "/", "-"];
      if (operators.includes(button.id)) {
        savedInputs.push(button.id);
        isOperatorUsed = true;
        whenOperatorIsUsed(displayedInputs, isOperatorUsed);
      } else {
        displayedInputs.push(button.id);
        savedInputs.push(button.id);
        showResult(displayedInputs, output);
      }
    });
  });

  enter.addEventListener("click", function () {
    const regex = /(-?\d+)([\+\*\/-])(-?\d+)/;
    const combinedInputs = makeEquation(savedInputs);
    const splitInputs = combinedInputs.match(regex);
    if (splitInputs) {
      const [_, firstNumber, operator, secondNumber] = splitInputs;
      const result = getResult(firstNumber, operator, secondNumber);
      if (typeof result === "number") {
        output.innerText = Number.isInteger(result)
          ? result.toString()
          : result.toFixed(2);
        displayedInputs.length = 0;
        displayedInputs.push(result.toString());
        savedInputs.length = 0;
        savedInputs.push(result.toString());
      } else {
        output.innerText = "N/A";
      }
    } else {
      output.innerText = "N/A";
    }
  });
  clearAll.addEventListener("click", function () {
    displayedInputs.length = 0;
    savedInputs.length = 0;
    isOperatorUsed = false;
    showResult(displayedInputs, output);
  });
}

function whenOperatorIsUsed(displayedInputs, isOperatorUsed) {
  if (isOperatorUsed) {
    displayedInputs.length = 0;
    isOperatorUsed = false;
  }
}

function makeEquation(savedInputs) {
  return savedInputs.join("");
}

function getResult(firstNumber, operator, secondNumber) {
  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
