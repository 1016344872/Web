window.onload=function(){
	var list=document.getElementById('list');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
  var time;
  play();
  var index=1;

	function animate(offset){
//style.left要获取左边的距离，所以第一张图后面style.left为负
//style.left获取的是字符串，用parseInt返回个数字。
//这里的list设置虽然为-600px但距离为600
	var newLeft=parseInt(list.style.left)+offset;//600
	list.style.left=newLeft+'px';//600px

/*少于<-2400的时候就是3000的时候直接变成-600
 就是图一把图一换了,而不是图一换成图5的思路*/
 	if(newLeft<-2400){
      	list.style.left = -600 + 'px';
 	}
 	if(newLeft>-600){
      	list.style.left = -2400 + 'px';
 }
	}
	prev.onclick=function(){
		animate(600);
	}
	next.onclick=function(){
		animate(-600);
	}
//-----自动轮播---//
	function play(){
		time=setInterval(function(){
			next.onclick();
		},2000);
	}

//------点击图时候暂停clearInterval-------//

var container=document.getElementById('container')
	function stop(){
		clearInterval(time);
	}
	//移动到小圆点时候调用stop函数
	//移开的时候继续调用play函数
	container.onmouseover=stop;
	container.onmouseout=play;

//-------小圆点--------------------------
var buttons=document.getElementById('buttons')
    .getElementsByTagName('span');

  	function buttonsShow(){
  	for(var i=0;i<buttons.length;i++){
      //消除样式，然后设置点那个，那个就有小圆点背景
  		if (buttons[i].className==='on') {
  			buttons[i].className='';
  		}
  	}
  	buttons[index-1].className='on'//数组0开始，故-1
  }

  prev.onclick=function(){
  	index-=1;
  	if (index<1) {
  		index=5;
  	}
  	animate(600);
  	buttonsShow();
  }
  next.onclick=function(){
  	index += 1;
  	if (index > 5) {
  		index = 1;
  	}
  	
  	animate(-600);
  	buttonsShow();
  };
//-------点击小圆点传到相应的图片--------
//获取偏移量，这里获得鼠标移动到小圆点的位置，
//用tihs把index绑定到对象buttons[i]上。
//这里的this指的对象是buttons

//由于这里的index是自定义属性，
//思路还是要通过偏移去找到图片
for (var i = 0; i < buttons.length; i++) {
    // 这里使用的是立即执行函数，
  (function(i){
    buttons[i].onclick=function(){
      var clickIndex=parseInt(this.getAttribute('index'));
      var offset=600 * (index -clickIndex);
      animate(offset);
      index=clickIndex;
      buttonsShow();
    }//阅读闭包相关知识
  })(i)
  }
}

//需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性
 /*for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
    var chilckIndex=parseInt(this.getAttribute('index'));
    var off*(indeset=600x-clickIndex);//1-1x600=0第一张 1-2x600=-600第二张
    animate(offset);
    index=chilckIndex;//？？
    buttonsShow();
//这里的I一直是5，所有的this都会指向buttons[5]
//没有获取正确的i值，用闭包就可以了。
    }
  }*/
