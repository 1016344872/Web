var rocket = document.getElementById('rocket');
var moreDown = document.getElementById('mo');
var moreCall = document.getElementById('morecontact');
var clickmore = document.getElementById('clickmore');
var moreDown2 = document.getElementById('moreDown2');

//触发返回顶部的火箭动画
rocket.onmouseover = function(){
	rocket.classList.add('fly');
}
rocket.onmouseout = function(){
	rocket.classList.remove('fly');
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
/*
function delayPlay(){
	setTimeout("clearPlay()",5000);
}
function clearPlay(){
	moreCall.style.display = "none";
}
*/
//浏览器兼容性
var scroTop = window.scrollTop;
var scroLeft = window.scrollLeft;
if (typeof pagWidth != "number") {
	scroLeft = document.documentElement.scrollLeft;
	scroTop = document.documentElement.scrollTop;
}else {
	scroLeft = document.body.scrollLeft;
	scroTop = document.body.scrollTop;
}
