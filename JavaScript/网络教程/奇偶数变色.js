var box_id=document.getElementById('newbox');
var get_li=box_id.getElementsByTagName('li');

for(var i=0;i<get_li.length;i++){
	/*if (i%2===0) {
		get_li[i].style.backgroundColor="#EEE";
	}else{
		get_li[i].style.backgroundColor="skyblue";
	}*/
	i%2===0?get_li[i].style.backgroundColor='#EEE':
	get_li[i].style.backgroundColor="skyblue"
}
