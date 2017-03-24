function liandong(arg){
	this.create(arg);					//入口
}
liandong.prototype={
	create:function(arg){
		this.sit=arg;					//保存数据
		this.key=[];					//做key值储存池，留做渲染
		var _self=this;
		getKey(arg,_self);				//获取key值
		this.showKey(this.key);			//渲染key值
		this.keyEvent();				//点击事件
	},
	showKey:function(key){					//渲染key
		var left=document.getElementById('ld-left');
		for(index in key){
			var msg=key[index];
			var li=document.createElement('li');
			li.class='ld-key';
			li.innerText=msg;
			left.appendChild(li);
		}
		
	},
	keyEvent:function(){			//li的点击事件
		var _self=this;				//保存对象
		var key=document.getElementById('ld-left');
		var list=key.childNodes;
		for( i in list){
			var i=i;
			if(list[i].nodeName=='LI'){
				list[i].onclick=function(){
					var k=this.innerText;
					_self.showValue(k);
				}
			}
		}
	},
	showValue:function(key){		//显示value值
		var right=document.getElementById('ld-right');
		this.clearValue(right);
		var value=this.sit[key];
		for(index in value){
			var msg=value[index];
			var li=document.createElement('li');
			li.class='ld-value';
			li.innerText=msg;
			right.appendChild(li);
		}		
	},
	clearValue:function(right){		//	清除value值
		right.innerHTML=null;	
	}
}
function getKey(site,obj){			//获取key，并将key值传入数组渲染
	for(var key in site){
		var key=key;
		obj.key.push(key);
		
	}
}