var rocket = document.getElementById('rocket');
var moreDown = document.getElementById('mo');
var moreCall = document.getElementById('morecontact');
var clickmore = document.getElementById('clickmore');
var moreDown2 = document.getElementById('moreDown2');


window.onload=function(){
	var delay = setInterval(countDown,1000);
}
//触发返回顶部的火箭动画
rocket.onmouseover = function(){
	rocket.classList.add('fly');
}
rocket.onmouseout = function(){
	rocket.classList.remove('fly');
}
//浏览器兼容性
document.onscroll = function(){
	var scroTop = window.scrollTop;
	var scroLeft = window.scrollLeft;
	if (typeof scroTop != "number") {
		scroLeft = document.documentElement.scrollLeft;
		scroTop = document.documentElement.scrollTop;
	}else {
		scroLeft = document.body.scrollLeft;
		scroTop = document.body.scrollTop;
	}
console.log(scroTop);
	if (scroTop>400) {
		rocket.style.display = "block";
	}else {
		rocket.style.display = "none";
	}

}


//触发联系栏的下拉内容
/*function playanima(tar,cla){
	if (tar.onmouseover) {
		cla.style.display = 'block';
	}else if (tar.onmouseout) {
		cla.style.display = 'none';
	}
}*/
moreDown.onmouseover = function(){
	moreCall.style.display = "block";
}
moreCall.onmouseover = function(){
	moreCall.style.display = "block";
}
moreDown.onmouseout = function(){
	moreCall.style.display = "none";
}
moreCall.onmouseout = function(){
	moreCall.style.display = "none";
}
clickmore.onmousedown = function(){
	moreDown2.style.display = 'block';
}
moreDown2.onmouseover = function(){
	moreDown2.style.display = 'block';
}
moreDown2.onmouseout = function(){
	moreDown2.style.display = 'none';
}
//countDown倒计时
function countDown(){
	var date1 = new Date(2019,2,5,15,53,0,0,0); 
	var date2 = new Date();
	var nowDate = (date2 - date1);
	var nowSeconds = Math.round(nowDate/1000)
	var nowMinutes = Math.round(nowSeconds/60);
	var nowHours = Math.round(nowMinutes/60);
	var nowDay = Math.round(nowHours/24);
	document.getElementById('nowDay').innerHTML = nowDay;
	document.getElementById('nowHours').innerHTML = nowHours;
	document.getElementById('nowMinutes').innerHTML = nowMinutes;
	document.getElementById('nowSeconds').innerHTML = nowSeconds;

}

