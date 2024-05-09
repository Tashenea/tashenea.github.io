/*
 *  by: Tashenea M. Burns-Young
 *  modified by: Kurtis Heer
 *  last modified: 2024-05-08
 *
 *  javascript code for Binary Calculator
 */

let input = '';

function appendNumber(number) {
    input += number;
    document.getElementById('output').value = input;
}

function binaryExpressionToDecimalExpression(expression) {
    if((expression.search(/[\+\-\*\/]{2}/) != -1) || (expression.search(/[\*\/]/) == 0) || (expression.search(/[\+\-\*\/]/) == expression.length - 1)) {
        // invalid syntax
        throw new SyntaxError;
        return;
    } else {
        let binaryArray = expression.split(/[-\+\*\/]/);

        if(expression[0] == "+" || expression[0] == "-") {
            // replace the first element in binaryArray with 0 (since split will have made it an empty string)
            binaryArray[0] = "0";
        }
            let opArray = [];
            let decimalArray = [];
            for(let i = 0; i < expression.length; i++) {
                switch(expression.charAt(i)) {
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                        opArray[opArray.length] = expression.charAt(i);
                        break;
                }
            }
                for(let i = 0; i < binaryArray.length; i++) {
                decimalArray[i] = parseInt(binaryArray[i], 2);
            }
            let numberAndOpArray = [];
            for(let i = 0; i < opArray.length; i++) {
                numberAndOpArray[numberAndOpArray.length] = decimalArray[i];
                numberAndOpArray[numberAndOpArray.length] = opArray[i];
            }
            numberAndOpArray[numberAndOpArray.length] = decimalArray[decimalArray.length - 1];

            return numberAndOpArray.join("");
    }
}

function calculate() {
    try {

        let expressionToCalculate = binaryExpressionToDecimalExpression(input);
        const result = eval(expressionToCalculate); // Use eval() for simplicity (not recommended for production)
        document.getElementById('output').value = result.toString(2);
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}
function backspace() {
    // Remove the last character from the input
    input = input.slice(0, -1);
    document.getElementById('output').value = input;
}

function clearAll() {
    // Clear the entire input
    input = '';
    document.getElementById('output').value = '';
}