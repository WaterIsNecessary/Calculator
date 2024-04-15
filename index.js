// Variables

// object to carry both calculation and flag key value pairs

let memory = {
    /* 
    
    VARIABLES:

    answer,
    operation,
    storageNum,
    storageNum2,

    FLAGS:

    decimal,
    equalsPressed,
    currentNumReset, 
    
    */             
};

// REGEX variable used within the wideButtonPressed function for the 'DEL' case

const re = /[/*\-+][0-9]{1}/g;

const divByZeroMessage = 'Undefined';

const currentNumMaxLimit = 21;

// Screen display variables

const currentNum = document.querySelector('.currentNumber');

const history = document.querySelector('.history');

// Button Variables

const numButtons = document.querySelectorAll('.num');

const operButtons = document.querySelectorAll('.oper');

const widerButtons = document.querySelectorAll('.widerButton');

const equalsButton = document.querySelector('.equals');


// Event Listeners

numButtons.forEach(ele => {

    ele.addEventListener('click', event => {

        let numPressed = event.target.textContent;

        numberPressed(numPressed);

    })
})

operButtons.forEach(ele => {

    ele.addEventListener('click', event => {

        let operPressed = event.target.textContent;

        operationPressed(operPressed);

    })
})

widerButtons.forEach(ele => {

    ele.addEventListener('click', event => {

        let widerPressed = event.target.textContent;

        wideButtonPressed(widerPressed);

    })
})

equalsButton.addEventListener('click', equalsPressed);



// Mathematical operative functions


function addition(object) {

    object.answer = Number(object.storageNum) + Number(object.storageNum2);
};

function subtraction(object) {
    
    object.answer = Number(object.storageNum) - Number(object.storageNum2);
};

function multiplication(object) {

    object.answer = Number(object.storageNum) * Number(object.storageNum2);
};

function division(object) {

    object.answer = Number(object.storageNum) / Number(object.storageNum2);
};



// Main operate function that calls the mathematical operative functions

function operate(object) {



    switch (object.operation) {

        case '+':
            addition(object);
            break;
        
        case '-':
            subtraction(object);
            break;

        case '*':
            multiplication(object);
            break;

        case '/':
            division(object);
            break;

    };

    currentNum.textContent = memory.answer;    
};


function numberPressed(pressed) {

    let currentNumLength = currentNum.textContent.length;    
    let currentNumText = currentNum.textContent;

    // Execute this if divided by zero error message is displayed. This resets
    // the display so new numbers can be keyed in immediately

    if (currentNumText === divByZeroMessage) {
        currentNum.textContent = '';
        currentNumText = '';
    }

    // Execute this to check if a decimal place has been used once. If
    // it has the decimal variable is flagged to true. If it has not been used
    // the decimal variable is flagged to false

    if (currentNum.textContent.includes('.')) {        
        memory.decimal = true;
    } else {
        memory.decimal = false;
    }

    // Execute this to stop digits being keyed in if the current number being
    // inputted has reached the maximum number length permitted

    if (currentNumLength === currentNumMaxLimit) {                
        return; 
    }

    // Execute this to reset the history of the display, if equals has been 
    // inputted previously to the current number being keyed in

    if (memory.equalsPressed) {
        history.textContent = '';
        memory.equalsPressed = false;
    }

    // If a calculation has been made i.e the current number has been reset,
    // execute this

    if (memory.currentNumReset) {
        currentNum.textContent = '';
        memory.currentNumReset = false;
    }

    // Execute this to prevent more than one decimal place being inputted if
    // the decimal flag is set to true. If the decimal is not being pressed a
    // normal digit is keyed in
    
    if (memory.decimal && pressed === '.') {
    
    } else {
        currentNum.textContent += pressed;
        history.textContent += pressed;
    }
};


function wideButtonPressed(pressed) {
    
    let historyTextLength = history.textContent.length;
    let historyText = history.textContent;

    let currentNumLength = currentNum.textContent.length;    
    let currentNumText = currentNum.textContent;

    let delVar = historyText.substring(historyTextLength-1, historyTextLength);
    let regVar = historyText.substring(historyTextLength-2, historyTextLength);
    
    switch (pressed) {

        // If the user presses AC clear the display and wipe the memory

        case 'AC':
            currentNum.textContent = '';
            history.textContent = '';
            memory = {};
            break;        

        case 'DEL':

        // Execute this if the display is displaying the divided by zero error 
        // message

            if (currentNumText === divByZeroMessage) {

                break;
            }

        // Execute this if the previous current number digit is an operation or
        // if equals has been pressed - i.e. do if these conditions are nothing
        // satisfied

            if (delVar === '/' || delVar === '*' || delVar === '+' || delVar === '-' || memory.equalsPressed) {

                memory.currentNumReset = true;

            } 
            
        // Execute this when you reach the last digit before an operation 
        // symbol. Delete the digit then flag equalsPressed so that no more 
        // digits can be deleted

            else if (re.test(regVar) || memory.equalsPressed) {
                currentNum.textContent = currentNumText.substring(0, currentNumLength-1);
                history.textContent = historyText.substring(0, historyTextLength-1);
                memory.currentNumReset = true;
            } 
            
        // Execute this when pressing the delete button. This deletes the
        // last digit pressed both from the current number and the history 
        // displays

            else {            
                currentNum.textContent = currentNumText.substring(0, currentNumLength-1);
                history.textContent = historyText.substring(0, historyTextLength-1);                
                memory.currentNumReset = false;                
            }            
            break;
    };
};

function operationPressed(pressed) {

    let historyTextLength = history.textContent.length;
    let historyText = history.textContent;

    let currentNumLength = currentNum.textContent.length;    
    let currentNumText = currentNum.textContent;
    
    let text = historyText.substring(0,historyTextLength-1);

    // Execute this if the current number is 21 digits to stop user inputting
    // needlessly huge numbers or if no number has been typed in no operation
    // is allowed to be pressed or lastly if the divided by zero error message
    // is displayed the user cannot press an operator. 

    if (currentNumLength === currentNumMaxLimit || currentNumLength === 0 || currentNumText === divByZeroMessage) {
                    

    // If the minus operation is pressed once and only once allow it to be 
    // displayed both in the history and current number displays as to allow      
    // calculations with negative numbers

        if (pressed === '-' && historyText.substring(0,1) != '-') {            
            history.textContent += pressed;
            currentNum.textContent += pressed;
        }

    }    

    // Execute this to swap out an operation that you have already clicked on 
    // with another operation
    
    else if (memory.currentNumReset && !(memory.equalsPressed)) {
        
        history.textContent = text + pressed;
        memory.operation = pressed;

    } 
    
    // Execute this if operations are pressed consecutively after each other 
    // without pressing equals. Effectively calculating the current operations 
    
    else if (memory.operation && currentNumText != '0') {            
        memory.storageNum2 = currentNum.textContent;
        operate(memory);                
        currentNum.textContent = memory.answer;
        history.textContent += pressed;
        memory.storageNum = memory.answer;
        memory.operation = pressed;
        memory.currentNumReset = true;
    } 
    
    // Execute this when trying to divide by zero
    
    else if (memory.operation && currentNumText === '0') {
        currentNum.textContent = divByZeroMessage;
        history.textContent = '';
        memory = {};
    } 
    
    // Execute this when an operation is being clicked for the first time in a
    // calculation sequence

    else if (!(memory.operation)) {
        memory.equalsPressed = false;
        history.textContent += pressed;
        memory.currentNumReset = true;
        memory.operation = pressed;
        memory.storageNum = currentNum.textContent;
    }
};

function equalsPressed() {

    let historyTextLength = history.textContent.length;
    let historyText = history.textContent;
        
    let currentNumText = currentNum.textContent;

    let historyLastTwo = historyText.substring(historyTextLength-2, historyTextLength);

    // Execute this if trying to press equals more than once consecutively to
    // prevent this exact action  

    if (memory.currentNumReset || !(memory.storageNum)) {

    } 
    
    // Execute this if trying to press equals when dividing by zero
    
    else if (memory.operation && historyLastTwo === '/0') {
        currentNum.textContent = divByZeroMessage;
        history.textContent = '';
        memory = {};
    } 
    
    // Execute this to calculate the current mathematical expression
    
    else {               
        memory.storageNum2 = currentNumText;
        operate(memory);
        history.textContent = memory.answer;
        currentNum.textContent = memory.answer;
        memory = {};
        memory.equalsPressed = true;
        memory.currentNumReset = true;
    }
};