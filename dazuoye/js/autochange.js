window.onload=function(){
var speed = 10;
var tab = document.getElementById('con');
var tab1 = document.getElementById('con1');
var tab2 = document.getElementById('con2');
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
}

    var userName,
        password,
        password2;
    function sub() {
        userName = document.getElementById('userName').value;
        password = document.getElementsByClassName('password')[0].value;
        password2 = document.getElementsByClassName('password')[1].value;
        if (userName.length < 4 || userName.length > 10) {
            alert('用户名长度为4~10位');
            return;
        } 
        if (!password || !password2) {
            alert('密码为空');
            return;
        } 
        if (password !== password2) {
            alert('两次密码输入不一样,请重新输入');
            return;
        }
        alert('注册成功');
    }

