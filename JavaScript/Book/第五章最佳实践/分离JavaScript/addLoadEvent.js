//这个函数可以让你无论让多少个函数在页面加载完成前加载都可以
	function addLoadEvent(func){
		var oldonload=window.onload;
		if (typeof window.onload!='function') {
			window.onload=func;
		}else{
			window.onload=function(){
				oldonload();
				func();
			}
		}
	}
	addLoadEvent(prepareLinks);