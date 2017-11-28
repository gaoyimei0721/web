var speed = 10;
var tab = document.getElementById('picScroll');
var tab1 = document.getElementById('picScroll1');
var tab2 = document.getElementById('picScroll2');
tab2.innerHTML = tab1.innerHTML;
function changeToLeft(){
	if(tab2.offsetWidth - tab.scrollLeft <= 0){
		tab.offsetWidth -= tab1.offsetWidth;
	}
	else{
		tab.scrollLeft++;
	}
}
var MyMar = setInterval(changeToLeft,speed);
tab.onmouseover = function(){clearInterval(MyMar)};
tab.onmouseout = function(){MyMar = setInterval(changeToLeft,speed)};