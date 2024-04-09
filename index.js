let memory = {};

const screenDisplay = document.querySelector('.screenContent');

const operationContent = document.querySelector('.operationContent');

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

    return object;

};

function subtraction(object) {

    /* - Number(screenDisplay.textContent) */
    object.answer = Number(object.storageNum) - Number(object.storageNum2);

    return object;

};

function multiplication(object) {

    object.answer = Number(object.storageNum) * Number(object.storageNum2);

    return object;

};

function division(object) {

    object.answer = Number(object.storageNum) / Number(object.storageNum2);

    return object;

};

function numberPress(pressed) {

    switch (pressed) {

        case '0':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 0;
            operationContent.textContent += 0;
            break;

        case '1':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 1;
            operationContent.textContent += 1;
            break;

        case '2':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 2;
            operationContent.textContent += 2;
            break;

        case '3':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 3;
            operationContent.textContent += 3;
            break;

        case '4':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 4;
            operationContent.textContent += 4;
            break;

        case '5':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 5;
            operationContent.textContent += 5;
            break;

        case '6':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 6;
            operationContent.textContent += 6;
            break;

        case '7':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 7;
            operationContent.textContent += 7;
            break;

        case '8':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 8;
            operationContent.textContent += 8;
            break;

        case '9':
            if (memory.blank) {
                screenDisplay.textContent = '';
                memory.blank = false;
            };
            screenDisplay.textContent += 9;
            operationContent.textContent += 9;
            break;

        case 'AC':
            screenDisplay.textContent = '';
            operationContent.textContent = '';
            memory = {};
            break;

        case '/':
            if (memory.blank && !(memory.equalsPressed)) {
                let text = operationContent.textContent.substring(0,operationContent.textContent.length-1);
                operationContent.textContent = text + '/';
                memory.operation = '/';

            } else if (memory.operation && !(memory.blank)) {            
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                operationContent.textContent += '/';
                memory.storageNum = memory.answer;
                memory.operation = '/';
                memory.blank = true;
            } else if (!(memory.operation)) {
                memory.equalsPressed = false;
                operationContent.textContent += '/';
                memory.blank = true;
                memory.operation = '/';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;

        case '*':
            if (memory.blank && !(memory.equalsPressed)) {
                let text = operationContent.textContent.substring(0,operationContent.textContent.length-1);
                operationContent.textContent = text + '*';
                memory.operation = '*';

            } else if (memory.operation && !(memory.blank)) {   
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                operationContent.textContent += '*';
                memory.storageNum = memory.answer;
                memory.operation = '*';
                memory.blank = true;
            } else if (!(memory.operation)) {
                memory.equalsPressed = false;
                operationContent.textContent += '*';
                memory.blank = true;
                memory.operation = '*';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;            

        case '-':
            if (memory.blank && !(memory.equalsPressed)) {
                let text = operationContent.textContent.substring(0,operationContent.textContent.length-1);
                operationContent.textContent = text + '-';
                memory.operation = '-';

            } else if (memory.operation && !(memory.blank)) {   
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                operationContent.textContent += '-';
                memory.storageNum = memory.answer;
                memory.operation = '-';
                memory.blank = true;
            } else if (!(memory.operation)) {
                memory.equalsPressed = false;
                operationContent.textContent += '-';
                memory.blank = true;
                memory.operation = '-';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;

        case '+':
            if (memory.blank && !(memory.equalsPressed)) {
                let text = operationContent.textContent.substring(0,operationContent.textContent.length-1);
                operationContent.textContent = text + '+';
                memory.operation = '+';

            } else if (memory.operation && !(memory.blank)) {   
                memory.storageNum2 = screenDisplay.textContent;
                operate(memory);
                screenDisplay.textContent = memory.answer;
                operationContent.textContent += '+';
                memory.storageNum = memory.answer;
                memory.operation = '+';
                memory.blank = true;
            } else if (!(memory.operation)) {
                memory.equalsPressed = false;
                operationContent.textContent += '+';
                memory.blank = true;
                memory.operation = '+';
                memory.storageNum = screenDisplay.textContent;
            }      
            break;

        case '=':
            if (memory.blank) {

            } else {   
            memory.storageNum2 = screenDisplay.textContent;
            operate(memory);
            operationContent.textContent = memory.answer;
            screenDisplay.textContent = memory.answer;
            memory = {};
            memory.equalsPressed = true;
            memory.blank = true;
            }

    }

};
