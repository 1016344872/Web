//需求，点哪一个li就让这个li有select样式类(对应的div也有此样式)
//而且要把其余的li div的select样式去除
//可以这样，先把所有li div移除select，再点击那个那个有select
//因为把其余的清除有点难做到

var tabBox=document.getElementById('tabBox');
var tabBox_li=tabBox.getElementsByTagName('li');
var	 tabBox_div=tabBox.getElementsByTagName('div');

function change(index){
 	for(var i=0;i<tabBox_li.length;i++){
 		tabBox_li[i].className='';
 		tabBox_div[i].className='';
 	}
 	//让当前点击的li div有select样式
 	tabBox_li[index].className='select';
 	tabBox_div[index].className='select';
 }
//给li绑定一个点击事件，点击change方法时，把点击li的index传进来
/*for(var i=0;i<tabBox_li.length;i++){
	tabBox_li[i].onclick=function (ev) {
		change()
		console.log(i)
			}}
;*///i为3,次处的i并不是想象中点击的索引
//给元素绑定点击事件方法，点击才执行，此处绑定属于创建函数，空间存的只是字符串
//所以i不是变量是字符(回顾全局作用域的函数创建)
//从你写for的时候i已经变成字符串3了，当方法执行(形成新的作用域，把之前的字符串变成代码)
//这时你开始点击，但你点击前i已经变成3
//第一种解决方法：只定义属性
for(var i=0;i<tabBox_li.length;i++){
	tabBox_li[i].myIndex=i;//这里这个i已经存在myIndex这里了
	tabBox_li[i].onclick=function(){
//this当前点击的这个li
//myindex当前点击li的这个索引
		change(this.myIndex);
	}
}