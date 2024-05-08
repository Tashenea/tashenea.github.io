var screen = document.querySelectorAll('#screen');
var calcBtn = document.querySelectorAll('.btn')

for(item of calcBtn)
{
	item.addEventListener('click',(e)=>{
		btntext = e.target.innerText;
		screen.value+=btntext;

	});
}