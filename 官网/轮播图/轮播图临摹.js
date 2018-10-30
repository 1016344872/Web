var list=document.getElementById('list');
var buttons=document.getElementById('buttons');
var container=document.getElementById('container');
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var index=1;
var time;
window.onload=function(){
	function animate(leftValue){
		var newLeft=parseInt(list.style.left)+leftValue;
		list.style.left=newLeft+'px';
		if (newLeft>-600) {
		list.style.left=-2400+'px';
		}
		if (newLeft<-2400) {
		list.style.left=-600+'px';
		}
	}
	prev.onclick=function(){
		animate(600);
	}
	next.onclick=function(){
		animate(-600);
	}
	
	function play(){
		time=setInterval(function(){
			next.onclick()
		},2000);
	}
	play();

	function stop(){
		clearInterval(time);
	}
	container.onmouseout=play;
	container.onmouseover=stop;
//-----------小圆点-------------
	function on(){
		for(var i=0;i<buttons.length;i++){
		if (buttons[i].className==='on') {
			buttons[i].className='';
		}
			buttons[index+1].className='on';
	}
	}
}
