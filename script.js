const operators = document.querySelectorAll('.op');
let chosenOperator = "";
const youSelected = document.querySelector('#input');

const result = document.querySelector('#result');
const digits = document.querySelectorAll('.digit');

const memory1 = document.querySelector('#memory1');
const memory2 = document.querySelector('#memory2');
const saveMemory1 = document.querySelector('#save1');
const saveMemory2 = document.querySelector('#save2');
const loadMemory1 = document.querySelector('#load1');
const loadMemory2 = document.querySelector('#load2');

const resume = document.querySelector('#resume');

const resumeInput = document.querySelector('#resumeInput');
resumeInput.addEventListener('keydown', function(event) {
    event.stopPropagation();
    //Länkat till input-fältet för att välja vilken rad i historiken man vill återgå till.
    //Är input-fältet aktivt så kan man inte använda siffrorna på tangentbordet för att trycka på kalkylatorn.
})


document.addEventListener('keydown', keyboardPress)
//Aktiverar så HTML-sidan kan registrera knapptryck på tangentbordet.


resume.addEventListener('click', resumeFromHistory);

digits.forEach(press => {press.addEventListener('click', function(event) {
    digitPress(this.innerText, event)})});
//Alla nummerknappar får samma '.addEventListener'
//Det som finns inuti HTML-knappen skickas in i funktionen 'digitPress'

operators.forEach(press => {press.addEventListener('click', function() {
    operatorPress(this.innerText)})});
    //Alla operatorknappar får samma '.addEventListener'

operators.forEach(operators => {
    operators.disabled = true;
});


saveMemory1.addEventListener('click', function() {
    memory1.innerText = result.innerText;
})
saveMemory2.addEventListener('click', function() {
    memory2.innerText = result.innerText;
})

loadMemory1.addEventListener('click', function() {
    digitPress(memory1.innerText);
})
loadMemory2.addEventListener('click', function() {
    digitPress(memory2.innerText);
})



function keyboardPress(pressedKey){
    const allowedOperators = ['+', '-', '*', '/'];
    let digitTest = Array.from(digits).every((digit) => digit.disabled);
    let operTest = Array.from(operators).every((operator) => operator.disabled);
    if (!isNaN(pressedKey.key)) {
            if(digitTest) {
                return;
                //Om digits är avstängda så kan man inte använda siffrorna på tangentbordet.
            }
            else {
                digitPress(pressedKey.key)
            }
        }
    else if (allowedOperators.includes(pressedKey.key)){
            if(operTest) {
                return;
                //Om operators är avstängda så kan man inte använda siffrorna på tangentbordet.
            }
            else {
                operatorPress(pressedKey.key);
            }
    }
}

function operatorPress(operator) {
    chosenOperator = operator
    youSelected.innerText = chosenOperator;

    let value1 = Number(result.innerText);
    if(chosenOperator.length > 1){
        calculateResult(chosenOperator, result, value1)
        incrementHistory(youSelected)
        chosenOperator = "";
    }
    else {
        disableOperators();
        incrementHistory(youSelected)
        disableMemory()
    }

}

function digitPress(digit) {
    youSelected.innerText = digit;
    let value1 = Number(result.innerText);
    let value2 = Number(digit);
    if(chosenOperator.length == 0 || chosenOperator.length == 5) {
        result.innerText = digit;
        disableMemory(chosenOperator);
    }
    else {
        calculateResult(chosenOperator, result, value1, value2);
        chosenOperator = "";
    }
    incrementHistory(youSelected)
    disableDigits();
}


export { operators, digits, saveMemory1, loadMemory1, saveMemory2, loadMemory2, chosenOperator, youSelected};
import { disableOperators, disableDigits, disableMemory } from "./disableButtons.js";
import { calculateResult } from "./calculateResult.js";
import { resumeFromHistory, incrementHistory } from "./history.js";