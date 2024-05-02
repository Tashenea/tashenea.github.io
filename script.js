let input = '';

function appendNumber(number) {
    input += number;
    document.getElementById('output').value = input;
}

function calculate() {
    try {
        const result = eval(input); // Use eval() for simplicity (not recommended for production)
        document.getElementById('output').value = result;
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