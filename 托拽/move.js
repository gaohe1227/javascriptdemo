/**
 * 获取属性值
 * @param obj:对象
 * @param attr:属性 
 */
function getStyle ( obj, attr ) {  
 if(obj.currentStyle)  
    {   
        return obj.currentStyle[attr];  
    }  
    else  
    {   
        return getComputedStyle(obj,false)[attr];  
    }  
}
/**
 * 运动
 * @param obj:对象
 * @param attr:属性
 * @param speed:速度
 * @param target:目标位置
 * @param fn:回调函数
 */
function moveStyle(obj,attr,speed,target,fn){
	var speed=parseInt(getStyle(obj,attr))<target?speed:-speed;//获取移动速度  
	clearInterval( obj.timer );//清除定时器
	obj.timer = setInterval(function () {//运动定时
		
		var dir = parseInt(getStyle( obj, attr )) + speed;			// 移动 
		obj.style[attr] = dir + 'px';  
		if(Math.abs(target-dir)<=Math.abs(speed)){
			obj.style[attr] =target +'px';
			dir=target;
		}  
		if ( dir == target ) {
			clearInterval(obj.timer); 
			console.log("运动结束") 
			if(null!=fn){
				fn();
			}
			
		}
		
	}, 100);
}
/**
 * 绑定事件
 * @param obj:对象
 * @param evname:事件名称
 * @param fn:方法
 */
function bind(obj, evname, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evname, fn, false);
	} else {
		obj.attachEvent('on' + evname, function() {
			fn.call(obj);
		});
	}
}