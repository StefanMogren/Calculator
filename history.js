let history = "";
const historyHTML = document.querySelector('.history');
const historyJSArray = [];
const clearHistory = document.querySelector('#clearHistory');

function incrementHistory(youSelected) {
    let li = document.createElement('li');
    let code = document.createElement('code');
    if (chosenOperator.length < 5){
        let lineNumber = historyHTML.children.length + 1;
        let lineObject = {
            id: lineNumber,
            result: result.innerText,
            selection: youSelected.innerText,
            history: history
        }
        history += youSelected.innerText + " ";
        code.innerText = history + "   = " + result.innerText;
        historyHTML.appendChild(li);
        li.appendChild(code);
        historyJSArray.push(lineObject);
    }
    else {
        code.innerText = " ";
        history = ""
    }

}

clearHistory.addEventListener('click', function() {
    while (historyHTML.firstChild) {
        historyHTML.removeChild(historyHTML.firstChild);
    }
    historyJSArray.length = 0;
})

function resumeFromHistory() {
    let inputNumber = resumeInput.value;
    let lineNumber = historyJSArray.find(object => object.id == inputNumber);
    if(lineNumber === undefined){
        return;
    }
    result.innerText = lineNumber.result;
    youSelected.innerText = lineNumber.selection;
    if(isNaN(lineNumber.selection)) {
        chosenOperator = lineNumber.selection;
        disableOperators();
        if(chosenOperator.length == 1){
            disableMemory();
        }
    }
    else{
        disableDigits();
    }
    history = lineNumber.history;
    incrementHistory(youSelected);
}





import { youSelected, chosenOperator } from "./script.js";
import { disableDigits, disableOperators } from "./disableButtons.js";
export { resumeFromHistory, incrementHistory, historyJSArray, clearHistory };