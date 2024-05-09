const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .output');
function backspc()
{
    display.vualue = display.value.toString().slice(0,-1);
}