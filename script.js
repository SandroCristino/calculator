const endResult = document.querySelector('.endResult');
const interResult = document.querySelector('.interResult');
const everyBtn = document.querySelectorAll('#Btn');
const deleteBtn = document.querySelector('.deleteBtn');
const clearBtn = document.querySelector('.clearBtn');


let operator = '';
let currentInput = '0';
let firstInputSave = '';
let secondInputSave = '';
let constantResult = '';
let result = 0;
let allowNumberCheck = false;

const add = (x,y) => x+y;
const sub = (x,y) => x-y;
const multi = (x,y) => x*y;
const divi = (x,y) => x/y;
// const operator = function(intOne, intTwo, operator) {
//     return intOne operator intTwo;
// }


everyBtn.forEach((button) => button.addEventListener('click', () => pressedBtn(button.textContent)));
    
function pressedBtn(btn) {
    

    switch (btn) {
        case '1': case'2': case '3': case '4': case '5': case '6': case '7': case '8': case'9': case '0': case '.':
            if (!allowNumberCheck) {
                
                currentInput = btn;
                
            
                if (currentInput == '') {
                    firstInputSave = currentInput;
                } 

                // if (firstInputSave != '') {
                    
                // }

                if (operator == ''){
                    firstInputSave += currentInput;
                    endResult.textContent = firstInputSave;
                } else {
                    secondInputSave += currentInput;
                    endResult.textContent = secondInputSave;
                }
            }   

            break;

        case '+': case '-': case '/': case 'x':
            operate();
            operator = btn;
            if (firstInputSave == '') {
                firstInputSave = currentInput;
            }
            currentInput = 0;
            interResult.textContent = endResult.textContent + ' ' + operator;
            allowNumberCheck = false;
            break;
        case '=':
            operate();
            break;
        case 'Clear':
            allowNumberCheck = false;
            firstInputSave = '', secondInputSave = '', operator = '', currentInput = '0';
            interResult.textContent = '';
            endResult.textContent = '0';
            break;
        case 'Delete':
            if (operator == '' ){
                firstInputSave = '';
                endResult.textContent = '0';
            } else {
                secondInputSave = '';
                endResult.textContent = '0';
            }
            break;
        default:
            console.log('Error');
    }

    function operate() {
        if (firstInputSave != '' && secondInputSave != '' && operator != '') {
            let first = parseFloat(firstInputSave);
            let second = parseFloat(secondInputSave);
            switch (operator) {
                case '+':
                    result = add(first,second);
                    break;
                case '-':
                    result = sub(first,second);
                    break;
                case 'x':
                    result = multi(first,second);
                    break;
                case '/':
                    result = divi(first,second);
                    break;
                default:
                    console.log('Operator error')
            }
            interResult.textContent = result;
            endResult.textContent = result;
            operator = '';
            currentInput = result;
            firstInputSave = '';
            secondInputSave = '';
            allowNumberCheck = true;


            console.log(first)
            console.log(second)
            console.log(result);
            console.log(firstInputSave)
        };
    }
function getCurrentVar () {
    if (secondInputSave == '' && operate == '') {
        return secondInputSave;
    } else {
        return firstInputSave;
    }
}



        
}
    






