var screen=document.querySelector('#calcScrn');
var btn=document.querySelectorAll('.calcBtn');

for(item of btn)
{
	item.addEventListener('click',(e)=>{
		btntext=e.target.innerText;
		if(btntext == 'x')
		{
			btntext='*';
		}
		if(btntext == '÷')
		{
			btntext='/';
		}


		screen.value+=btntext;

	});
}
function clrAll()
{
	screen.value = '';
}

function equalOperator()
{
	screen.value = eval(screen.value);
}