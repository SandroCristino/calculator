const endResult = document.querySelector('.endResult');
const interResult = document.querySelector('.interResult');
const everyBtn = document.querySelectorAll('#Btn');

let operator = '';
let currentInput = '0';
let firstInputSave = '';
let secondInputSave = '';
let constantResult = '';
let result = 0;

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
        case '1': case'2': case '3': case '4': case '5': case '6': case '7': case '8': case'9': case '0':
            currentInput = btn;

            if (currentInput == '0'){
                currentInput == '';
            }

            if (operator == '' ){
                firstInputSave += currentInput;
                endResult.textContent = firstInputSave;
            } else {
                secondInputSave += currentInput;
                endResult.textContent = secondInputSave;
            }

            currentInput = '';

            break;

        case '+': case '-': case '/': case 'x':
            operate();
            operator = btn;
            currentInput = 0;
            interResult.textContent = endResult.textContent + ' ' + operator;
            break;
        case '=':
            operate();
            break;
        default:
            console.log('Error');
    }

    function operate() {
        if (firstInputSave != '' && secondInputSave != '' && operator != '') {
            let first = parseInt(firstInputSave);
            let second = parseInt(secondInputSave);
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
            firstInputSave = result;
            secondInputSave = '';



            console.log(first)
            console.log(second)
            console.log(result);
        };
    }
}





