function showPic(which){
	//图库
   var source=which.getAttribute('href');
   var placeholder=document.getElementById('placeholder');
   placeholder.setAttribute('src',source);
   //文本
   var title=which.getAttribute('title');
   var text=document.getElementById('text');
   text.firstChild.nodeValue=title;
}