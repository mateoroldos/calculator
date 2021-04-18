// GLOBAL VARIABLES

let result
let screenString = ""
let equalPressed = false

let numberA
let numberB
let operandC

// EVENT LISTENERS

// Number buttons
const btnNumber = document.querySelectorAll(".btn-number");
btnNumber.forEach((button) => {
    button.addEventListener("click", function (e) {
        switch (true) {
            case (equalPressed == true):
                screenString = ""
                equalPressed = false
                break;

            default:
                break;
        } 
        screenString = screenString + e.target.id
        showOnScreen (screenString)
    })
})

// Dot Button
const btnDot = document.querySelector(".btn-dot");
btnDot.addEventListener("click", (e) => {
    if (screenString.includes(".") == false && screenString !== "") {
        screenString = screenString + e.target.id
        showOnScreen (screenString)
        console.log("toy")
    }
})
    

// Operand buttons
const btnOperation = document.querySelectorAll(".btn-operation");
btnOperation.forEach((button) => {
    button.addEventListener("click", function (e) {
        numberA = Number(screenString)
        screenString = ""
        operandC = e.target.id
        showOnScreen (operandC)
    })
})

// Equal button
const btnEqual = document.getElementById("=");
btnEqual.addEventListener("click", () => {
    numberB = Number(screenString)
    operate (operandC, numberA, numberB)
    showOnScreen (result)
    screenString = result
    equalPressed = true
})

// Erase button
const btnErase = document.querySelector("#Backspace");
btnErase.addEventListener("click", () => {
    switch (true) {
        case (screenString !== ""):
            screenString = screenString.slice(0,(screenString.length-1))
            showOnScreen (screenString)
            break;
    
        default:
            break;
    }
})

// AC button
const btnAC = document.querySelector("#btn-ac");
btnAC.addEventListener("click", () => {
    screenString = ""
    showOnScreen (screenString)
})

// +/- button
const btnInverse = document.querySelector("#btn-inverse");
btnInverse.addEventListener("click", () => {
    screenString = (Number(screenString) * -1).toString()
    showOnScreen (screenString)
})

// KEYBOARD EVENTS

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    document.getElementById(event.key).click();
})

// FUNCTIONS

// Operations
function sum (a, b) {
    let operation
    operation = a + b
    return operation
}

function substract (a, b) {
    let operation
    operation = a - b
    return operation
}

function divide (a, b) {
    let operation
    peration = a / b
    return operation
}

function multiply (a, b) {
    let operation
    operation = a * b
    return operation
}

function operate (operand, a, b) {

    switch (operand) {

        case "+":
            result = sum (a, b);
            break;

        case "-":
            result = substract (a, b);
            break;

        case "/":
            switch (true) {
                case b !== 0 :
                    result = a / b;
                    break;

                case b == 0 :
                    result = "Didn't you go to school?"
                    break;

                default:
                    break;
            }

            break;       
            
        case "*":
            result = multiply (a, b);
            break;
        
        default:
            break;

    }
    return result
}


// Show On Screen
function showOnScreen (string) {
    const screen = document.querySelector("#screen")
    screen.innerHTML = "<p>" + string + "</p>"
}
