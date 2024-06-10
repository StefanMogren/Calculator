function calculateResult (chosenOperator, result, value1, value2) {
    if (chosenOperator.length == 1) {
        switch (chosenOperator) {
            case "+":
                result.innerText = value1 + value2;
                break;
            case "-":
                result.innerText = value1 - value2;
                break;
            case "*":
                result.innerText = value1 * value2;
                break;
            case "/":
                result.innerText = value1 / value2;
                break;
        };
    }
    else if(chosenOperator.length > 1){
        switch(chosenOperator) {
            case "Clear":
                result.innerText = "";
                disableOperators();
                break;
            case "√x": {
                result.innerText = Math.sqrt(value1);
                break;
            }
            case "x^2": {
                result.innerText = value1 * value1;
                break;
            }
        }
    }
    disableMemory(chosenOperator.length)
};

export{ calculateResult };
import { disableOperators, disableMemory } from "./disableButtons.js";