function disableOperators() {
    operators.forEach(operators => {
        operators.disabled = true;
    });
    digits.forEach(digits => {
        digits.disabled = false;
    });
}

function disableDigits() {
    operators.forEach(operators => {
        operators.disabled = false;
    });
    digits.forEach(digits => {
        digits.disabled = true;
    });
}

function disableMemory(chosenOperator) {
    if(memory1.innerText.length > 0) {
        loadMemory1.disabled = false;
    }
    if(memory2.innerText.length > 0) {
        loadMemory2.disabled = false;
    }
    if(result.innerText.length > 0) {
        saveMemory1.disabled = false;
        saveMemory2.disabled = false;
    }
    else if (result.innerText.length == 0) {
        saveMemory1.disabled = true;
        saveMemory2.disabled = true;
    }
    
    if (chosenOperator >= 0 && chosenOperator < 5) {
        loadMemory1.disabled = true;
        loadMemory2.disabled = true;
    }
}



import { operators, digits, saveMemory1, loadMemory1, saveMemory2, loadMemory2} from "./script.js";
export { disableOperators, disableDigits, disableMemory};