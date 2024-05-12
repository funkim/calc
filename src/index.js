import { clickButtons, displayCalc, setValues } from "./calc";
import { style } from "./style.css";

function main() {
  const [calculator, buttons, clear, clearAll, enter, output] = displayCalc();
  const savedInputs = [];
  const displayedInputs = [];
  let isOperatorUsed = false;

  clickButtons(
    displayedInputs,
    savedInputs,
    isOperatorUsed,
    buttons,
    clear,
    clearAll,
    enter,
    output
  );
}

main();
