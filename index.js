let memory = {};

const screenDisplay = document.querySelector('.currentNumber');

const history = document.querySelector('.history');

const numberButtons = document.querySelectorAll('button');

numberButtons.forEach(ele => {

    ele.addEventListener('click', event => {

        let numberPressed = event.target.textContent;

        numberPress(numberPressed);

    }); 

});


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

    screenDisplay.textContent = memory.answer;    
};



function addition(object) {

    object.answer = Number(object.storageNum) + Number(object.storageNum2);

    /* return object; */

};

function subtraction(object) {

    /* - Number(screenDisplay.textContent) */
    object.answer = Number(object.storageNum) - Number(object.storageNum2);

    /* return object; */

};

function multiplication(object) {

    object.answer = Number(object.storageNum) * Number(object.storageNum2);

    /* return object; */

};

function division(object) {

    /* if (Number(object.storageNum2) === 0) {

        
        few things to fix
        
        -number length of both operation and screen content 
        
    } else { */

    object.answer = Number(object.storageNum) / Number(object.storageNum2);

    /* } */

    /* return object; */

};

function numberPress(pressed) {
    
    let displayText = screenDisplay.textContent;

    if (displayText === 'Undefined') {
        screenDisplay.textContent = '';
        displayText = '';
    }    

    switch (pressed) {        

        case '0':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 0;
            history.textContent += 0;
            break;

        case '1':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }            
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 1;
            history.textContent += 1;
            break;

        case '2':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 2;
            history.textContent += 2;
            break;

        case '3':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 3;
            history.textContent += 3;
            break;

        case '4':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 4;
            history.textContent += 4;
            break;

        case '5':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 5;
            history.textContent += 5;
            break;

        case '6':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 6;
            history.textContent += 6;
            break;

        case '7':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 7;
            history.textContent += 7;
            break;

        case '8':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 8;
            history.textContent += 8;
            break;

        case '9':
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += 9;
            history.textContent += 9;
            break;

        case '.':
            if (screenDisplay.textContent.includes('.')) {
                break;
            }
            if (screenDisplay.textContent.length === 21) {
                
                break;
            }
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            }
            if (memory.equalsPressed) {
                history.textContent = '';
            }
            screenDisplay.textContent += '.';
            history.textContent += '.';
            break;

        case 'AC':
            screenDisplay.textContent = '';
            history.textContent = '';
            memory = {};
            break;

        case 'DEL':
            const re = /[/*\-+][0-9]{1}/g;

            let delVar = history.textContent.substring(history.textContent.length-1, history.textContent.length);
            let regVar = history.textContent.substring(history.textContent.length-2, history.textContent.length);

            if (delVar === '/' || delVar === '*' || delVar === '+' || delVar === '-' || memory.equalsPressed) {
                memory.blank = true;
              
            } else if (re.test(regVar) || memory.equalsPressed) {
                screenDisplay.textContent = screenDisplay.textContent.substring(0, screenDisplay.textContent.length-1);
                history.textContent = history.textContent.substring(0, history.textContent.length-1);
                memory.blank = true;
            } 
            else {
                screenDisplay.textContent = screenDisplay.textContent.substring(0, screenDisplay.textContent.length-1);
                history.textContent = history.textContent.substring(0, history.textContent.length-1);
                
                memory.blank = false;           
                
            }
            break;

        case '/':
            if (screenDisplay.textContent.length === 21) {
                         
            
            } else if (memory.blank && !(memory.equalsPressed)) {
                let text = history.textContent.substring(0,history.textContent.length-1);
                history.textContent = text + '/';
                memory.operation = '/';

            } else if (memory.operation && displayText != '0') {            
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);                
                screenDisplay.textContent = memory.answer;
                history.textContent += '/';
                memory.storageNum = memory.answer;
                memory.operation = '/';
                memory.blank = true;
            } else if (memory.operation && displayText === '0') {
                screenDisplay.textContent = 'Undefined';
                history.textContent = '';
                memory = {};
            } 
            
            else if (!(memory.operation)) {
                memory.equalsPressed = false;
                history.textContent += '/';
                memory.blank = true;
                memory.operation = '/';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;

        case '*':
            if (screenDisplay.textContent.length === 21) {
                

            } else if (memory.blank && !(memory.equalsPressed)) {
                let text = history.textContent.substring(0,history.textContent.length-1);
                history.textContent = text + '*';
                memory.operation = '*';

            } else if (memory.operation/*  && displayText != '0' */) {   
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                history.textContent += '*';
                memory.storageNum = memory.answer;
                memory.operation = '*';
                memory.blank = true;
            } /* else if (memory.operation && displayText === '0') {
                screenDisplay.textContent = 'Undefined';
                history.textContent = '';
                memory = {}; 
            } */ else if (!(memory.operation)) {            
                memory.equalsPressed = false;
                history.textContent += '*';
                memory.blank = true;
                memory.operation = '*';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;            

        case '-':
            if (screenDisplay.textContent.length === 21) {
                             
            
            } else if (memory.blank && !(memory.equalsPressed)) {
                let text = history.textContent.substring(0,history.textContent.length-1);
                history.textContent = text + '-';
                memory.operation = '-';

            } else if (memory.operation/*  && displayText != '0' */) {   
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                history.textContent += '-';
                memory.storageNum = memory.answer;
                memory.operation = '-';
                memory.blank = true;
            } /* else if (memory.operation && displayText === '0') {
                screenDisplay.textContent = 'Undefined';
                history.textContent = '';
                memory = {};
            } */ else if (!(memory.operation)) {            
                memory.equalsPressed = false;
                history.textContent += '-';
                memory.blank = true;
                memory.operation = '-';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;

        case '+':
            if (screenDisplay.textContent.length === 21) {
                             
            
            } else if (memory.blank && !(memory.equalsPressed)) {
                let text = history.textContent.substring(0,history.textContent.length-1);
                history.textContent = text + '+';
                memory.operation = '+';

            } else if (memory.operation/*  && displayText != '0' */) {   
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                history.textContent += '+';
                memory.storageNum = memory.answer;
                memory.operation = '+';
                memory.blank = true;
            } /* else if (memory.operation && displayText === '0') {
                screenDisplay.textContent = 'Undefined';
                history.textContent = '';
                memory = {};                
            } */ else if (!(memory.operation)) {
                memory.equalsPressed = false;
                history.textContent += '+';
                memory.blank = true;
                memory.operation = '+';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;

        case '=':

            let regVar2 = history.textContent.substring(history.textContent.length-2, history.textContent.length);

            if (memory.blank || !(memory.storageNum)) {

            } else if (memory.operation && regVar2 === '/0') {
                screenDisplay.textContent = 'Undefined';
                history.textContent = '';
                memory = {};
            } else {               
            memory.storageNum2 = screenDisplay.textContent;
            operate(memory);
            history.textContent = memory.answer;
            screenDisplay.textContent = memory.answer;
            memory = {};
            memory.equalsPressed = true;
            memory.blank = true;
            }
            break;
    }

};
