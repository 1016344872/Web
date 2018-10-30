	window.onload=prepareLinks;//如果script在head之间就要让JS先加载，方法是window.onload=xxx()
	//点击链接时候调用popUp函数
	function prepareLinks(){
		if (!document.getElementById) return false;//向后兼容，如果浏览器不支持getElementByID那么容易不会执行
		
		var links=document.getElementsByTagName('a');
		for(var i=0;i<links.length;i++){
			if (links[i].getAttribute('class')=='OP'){//如果某链接的class属性等于OP那么就表示这个链接被点击时候调用popUp函数
				links[i].onclick=function(){//a链接class是OP那么点击时候会激活这个功能
					popUp(this.getAttribute('href'));//获取点击链接的href属性,调用下面popUp()函数
					return false;//不让他把网页带离当前页面
				}
			}
		}
	}
	function popUp(winURL){
		window.open(winURL,'sss','width=320,height=320');
	}