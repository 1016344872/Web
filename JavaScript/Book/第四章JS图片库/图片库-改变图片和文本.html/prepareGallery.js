window.onload=function(){
	prepareGallery();
}

function prepareGallery(){
	if (!document.getElementsByTagName)return false;
	if (!document.getElementById)return false;
	if (!document.getElementById('imagegallery')) return false;
	 var gallery=document.getElementById('imagegallery');
	 var links=gallery.document.getElementsByTagName('a');
	 for (var i = 0; i < links.length; i++) {
	 	links[i].onclick==function(){
	 		return !showPic(this);//这里的this表示links[i]
			
	 	}
	 }
}
