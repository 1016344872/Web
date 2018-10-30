var tabBox=document.getElementById('tabBox'),
	tabBox_li=tabBox.getElementsByTagName('li'),
	tabBox_div=tabBox.getElementsByTagName('div');

//清除所有selsect类,点击那个给那个加个li
	function change(index){
		for(var i=0;i<tabBox_li.length;i++){
			tabBox_li[i].className='';
			tabBox_div[i].className='';
		}
		tabBox_li[index].className='select';
		tabBox_div[index].className='select';
	}
//给li绑定一个点击事件
	for(var i=0;i<tabBox_li.length;i++){
		tabBox_li[i].myIndex=i;
		tabBox_li[i].onclick=function(){
			change(this.myIndex);
		}
	}