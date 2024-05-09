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

function CE()
{
	screen.value = screen.value.substr(0,screen.value.length-1);
}

function equalOperator()
{
	try 
	{
		screen.value = eval(screen.value);
	}
	catch (error)
	{
		screen.value = 'Error';
	}
}

function sin()
{
	screen.value = Math.sin(screen.value);
}

function cos()
{
	screen.value = Math.cos(screen.value);
}

function tan()
{
	screen.value = Math.tan(screen.value);
}

function pow()
{
	screen.value = Math.pow(screen.value,2);
}

function sqrt()
{
	screen.value = Math.sqrt(screen.value);
}

function logBase10()
{
	screen.value = Math.log10(screen.value);
}

function pi()
{
	screen.value = 3.14159265359;
}

function e()
{
	screen.value = 2.71828182846;
}

function cbrt()
{
	screen.value = Math.cbrt(screen.value);
}

function ln()
{
	screen.value = Math.log(screen.value); // log base e
}

function logBase2()
{
	screen.value = Math.log2(screen.value);
}

function inverse()
{
	screen.value = 1 / screen.value;
}

function cube()
{
	screen.value = screen.value * screen.value * screen.value;
}

function fact()
{
	var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
      f=f*i;
    }
    i=i-1;
	screen.value=f;

}