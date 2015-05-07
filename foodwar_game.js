// JavaScript Document
//tableWidth = screen.availWidth; 
//tableHeight =screen.availHeight;	
//function winSize(event){
tableWidth = document.body.clientWidth; 
tableHeight =document.body.clientHeight;
$('#dotu').css('width',tableWidth);
$('#dotu').css('height',tableHeight);
//}

function start(event){
				init();
				document.getElementById("startBtn").style.display = "none";
			}


function init() {
	
var c = document.getElementById("dotu");
var cxt = c.getContext("2d");
var img = newImg("./img/bg_01.png");
var fps;
var cj1 =0;
var cj2 =0;
var cj3 =0;
var cj4 =0;
var cj5 =0;
var cj6 =0;
var wjcj =0;
//var is=0;
//创建480*800的画布
//tableWidth = 480; 
//tableHeight =800;
//tableWidth = document.body.clientWidth; 
//tableHeight =document.body.clientHeight;
//$('#dotu').css('width',tableWidth);
//$('#dotu').css('height',tableHeight);
//$('#dotu').css('position','relative');

//setTimeout('winSize()', 10); 
//setTimeout('winSize()',1000);
cxt.drawImage(img,0,0,tableWidth,tableHeight); 
   
   
          
cxt.font="微软雅黑";
// 创建渐变
//var gradient=cxt.createLinearGradient(0,0,c.width,0);
//gradient.addColorStop("0","magenta");
//gradient.addColorStop("0.5","blue");
//gradient.addColorStop("1.0","red");
//// 用渐变填色
//ctx.fillStyle=gradient;
 
 //游戏开始画面
//function start(){
//	//window.clearTimeout(fps);
//	//$('#dotu').fadeOut();
//	$('.content').css('position','relative');
//	$('.content').append('<span style="position:absolute; top:5px; left:2px; font-size:50px; color:#FF3366;  text-align:center" id="sil"></span>');
//	$('#sil').html('请').hide().fadeIn(1000,function(){
//		$(this).html('请输入').hide().fadeIn(1000,function(){
//			$(this).html('<a href="javascript:location.reload();" style="color:#cc0000" title="重新开始">请输入令你头痛的五门考试科目：</a><br>'
//			+'<input name="1" type="text" id="11" /><br>'
//			+'<input name="2" type="text" id="11" /><br>'
//			+'<input name="3" type="text" id="11" /><br>'
//			+'<input name="4" type="text" id="11" /><br>'
//			+'<input name="5" type="text" id="11" /><br>'
//			+'<input type="button" value="OK" onclick="showAA()" />').hide().fadeIn();
//		});	
//	});
//}
 
 
/* 
function showAA(){
 					var arrs = document.getElementsByTagName("input");

					 for(var i=0;i<arrs.length-1;i++){
        				
                    alert(arrs[i].value);
       				cxt.fillText(arrs[i].value,50, 30);	
					 }

					cxt.fillText(arrs[0].value,50, 30);
					var meiwei11 = cxt.fillText(arrs[0].value,50, 30);//粑粑
					var meiwei22 = cxt.fillText(arrs[1].value,50, 30);//粑粑
					var meiwei33 = cxt.fillText(arrs[2].value,50, 30);//粑粑
					var meiwei44 = cxt.fillText(arrs[3].value,50, 30);//粑粑
					var meiwei55 = cxt.fillText(arrs[4].value,50, 30);//粑粑
					alert(meiwei55.value);
					alert(arrs[0].value);
					
}
*/
//is=1;
//if (is==1){

	
	
//创建三个不良食品
var flivverLog = 0;
var flivver1 = newImg("./img/flivver.png");//粑粑
var flivver2 = newImg("./img/flivver2.png");
var flivver3 = newImg("./img/flivver3.png");//辣条
//var flivver4 = newImg("./img/m4.png");//辣条
//创建五个美味食品
var meiweiLog = 0;
var meiwei1 = newImg("./img/m1.png");//粑粑
var meiwei2 = newImg("./img/m6.png");
var meiwei3 = newImg("./img/m3.png");//辣条
//var meiwei4 = newImg("./img/m4.png");
//var meiwei5 = newImg("./img/m5.png");//辣条
//var meiwei6 = newImg("./img/m6.png");//辣条

// 用于记录游戏的时间，越到后面越快
var time1 = 0;
var time2 = 80;

// 积分
var jifen = 0;
//平均成绩
var pjcj=0;


//随机产生速度
function getSudu(){
	var number = parseInt(Math.random()*11);
	if(number < 6 && number > 0){
		return number;
	}
	return 1;
}

// 不良食品的对象
function flivverObj(hp,ewidth,eheight,eimg,esudu){
	// 随机的X
	this.x = parseInt(Math.random()*460+1);
	this.y = 0;
	// 血量
	this.hp = hp;
	// 挨打	
	this.hit = 0;
	// 是否死亡
	this.over = 0;
	
	this.width = ewidth;
	this.height = eheight;
	this.img = eimg;
	this.sudu = esudu;
}

// 获取不良食品
function getFlivver(type){
	switch(type){
		case 1:
			return new flivverObj(100,70,50,flivver1,getSudu());
		case 2:
			return new flivverObj(500,60,60,flivver2,getSudu());
		case 3:
			return new flivverObj(1000,60,80,flivver3,getSudu());
		//case 4:
			//return new flivverObj(100,60,65,flivver4,getSudu());
	}
}

// 美味食品的对象
function meiweiObj(hp,ewidth,eheight,eimg,esudu){
	// 随机的X
	this.x = parseInt(Math.random()*460+1);
	this.y = 0;
	//科目cj
	this.cj = 0;
	//科目hp
	this.hp = hp;
	// 挨打	
	this.hit = 0;
	// 是否被吃
	this.over = 0;
	
	this.width = ewidth;
	this.height = eheight;
	this.img = eimg;
	
	//this.title=etitle;
	
	this.sudu = esudu;
}

// 获取美味食品
function getmeiwei(type){
	switch(type){
		case 1:
			return new meiweiObj(100,70,55,meiwei1,getSudu());
		case 2:
			return new meiweiObj(500,55,70,meiwei2,getSudu());
		case 3:
			return new meiweiObj(100,63,59,meiwei3,getSudu());
		/*case 4:
			return new meiweiObj(100,60,65,meiwei4,getSudu());
		case 5:
			return new meiweiObj(500,50,70,meiwei5,getSudu());
		case 6:
			return new meiweiObj(100,50,50,meiwei6,getSudu());*/
	}
}


//子弹坐标
function cartridge(x,y){
	this.x = x;
	this.y = y;	
}


var pjfs=pjcj-wjcj/3;


//游戏结束画面
function gameover(){
	window.clearTimeout(fps);
	//$('#dotu').fadeOut();
	$('.content').css('position','relative');
	$('.content').append('<span style="position:absolute; top:0px; left:0px;font-size:25px; #FF3366;  alignment-adjust:central;" id="sil"></span>');
	//$('#sil').html('你').hide().fadeIn(1000,function(){
		//$(this).html('你屎').hide().fadeIn(1000,function(){
			//$(this).html('<a href="javascript:location.reload();" style="color:#cc0000" title="重新开始">你屎了</a><br>' + jifen  + ' 分').hide().fadeIn();
		//});	
	//});
	var ks1 = document.getElementById('ks1').value;
	var ks2 = document.getElementById('ks2').value;
	var ks3 = document.getElementById('ks3').value;
	//var ks4 = document.getElementById('ks4').value;
	//var ks5 = document.getElementById('ks5').value;
	//var ks6 = document.getElementById('ks6').value;
	$('#sil').append('<a href="javascript:location.reload();" style="color:#FF6600;font:40px 微软雅黑;" title="重新开始"><br>你屎了</a><br><br><p id="fen">' +'平均成绩:'+ pjfs+ '分<br>'+ks1+':'+cj1+'分<br>'+ks2+':'+cj2+'分<br>'+ks3+':'+cj3+'分<br></p>');
//		+ks1+':'+cj1+'分<br>'+ks2+':'+cj2+'分<br>'+ks3+':'+cj3+'分<br>'+ks4+':'+cj4+'分<br>'+ks5+':'+cj5+'分<br>'+ks6+':'+cj6+'分<br>');

			$('#sil').append('<input type="button" class="restart" onclick="location.reload();"/>');
	if(pjcj>=100){
		$('#sil').append('<p>超神</p>');}
		
		 else if(pjcj>=95){
			$('#sil').append('<p>学神</p>');}
			
			 else if(pjcj>=90){
				$('#sil').append('<p>学霸</p>');}
			
				 else if(pjcj>=80){
					$('#sil').append('<p>好学生</p>');}
					
					 else if(pjcj>=70){
						$('#sil').append('<p>小学酥</p>');}
						
						 else if(pjcj>=60){
			            	$('#sil').append('<p>学渣</p>');}
							
							 else if(pjcj>=50){
			       				$('#sil').append('<p>挂科啦</p>');}
								
								 else if(pjcj>=25){
									$('#sil').append('<p>学沫沫哒</p>');}
									
									 else if(pjcj<=25&&pjcj>0){
										$('#sil').append('<p>回家种田吧</p>');}
									
									 	else if(pjcj==0){
			  								$('#sil').append('<p>无法直视</p>');}
											}
			//alert(' 分<br>');
			//for(k in meiwei){	
			/*$('#sil').append(cj1  + ' 分<br>');
			$('#sil').append(cj2  + ' 分<br>');
			$('#sil').append(cj3  + ' 分<br>');
			$('#sil').append(cj4  + ' 分<br>');
			$('#sil').append(cj5  + ' 分<br>');
			$('#sil').append(cj6  + ' 分<br>');
			//$('#sil').html(cj  + ' 分<br>');*/
			//}

(function(cxt){
	var dotu = {nums:0};
	// 用于存放小粑粑
	var flivver = new Array();
	//var flivverImg = newImg("./img/flivver.png");
	//var flivverImg = newImg("./img/flivver.png");
	// 用于存放小粑粑
	var meiwei = new Array();
	//var meiweiImg = newImg("./img/m1.png");
	
	// 自己
	var me = {x:240,y:750};
	//var meImg = newImg('./img/m.png');
	//var me = {x:1040,y:750};
	var meobj = document.getElementsByName("choose");
	for (i=0;i<2;i++)
	{
		if (meobj[i].checked){
		if (meobj[i].value=="man"){
			var meImg = newImg('./img/m.png');
		}
		else{
			var meImg = newImg('./img/w.png');
		}
		}
			
	}
	/*var man = document.getElementById("man");
	function man(){
	var meImg = newImg('./img/m.png');
	}
	
	function woman(){
	var meImg = newImg('./img/w.png');
	}*/
	// 子弹
	var cartridges = new Array();
	var cartridgeImg = newImg('./img/kiss.png');
	//爆炸画面
	var boo1 = newImg('./img/kiss4.png');
	var bool1= newImg('./img/kiss2.png');
	var over = newImg('./img/kiss1.png');
	// 
	dotu.update = function(){
		//设置时间
		dotu.setTimes();
		// 设置背景
		dotu.setBg();
		// 设置不良食品
		dotu.setFood();
		// 设置美味食品
		//dotu.setmeiwei();
		// 画自己
		dotu.setMe();
		// 子弹
		dotu.cartridge();
		
		
		cxt.font = "20px 微软雅黑";
		cxt.strokeText("平均分：" + pjfs, 10, 30);
		
		$('#fjs').html(flivver.length);
		$('#fjs').append(meiwei.length);
		$('#zds').html(cartridges.length);
		$('#scfj').html("1000/" + time2 + " 毫秒");
	}
	
	
	//设置不断加速的时间
	dotu.setTimes = function(){
		time1++ ;
		// 100 秒 1个档位
		if(time1 == 1000){
			time1 = 0;
			time2 = (time2 == 20) ? 20 : time2 - 20;
		}
		
	}
	
	
	/**
	 * 设置移动的背景
	 */
	dotu.setBg = function(){
		dotu.nums++;
		if(dotu.nums == tableHeight){
			dotu.nums = 0;	
		}
		// 画布的背景
		cxt.drawImage(img,0,dotu.nums,480,800);
		cxt.drawImage(img,0,dotu.nums - 800,480,800);
	}
	
	//设置不良食品
	dotu.setFood = function(){
		// 生成不良食品
		if(dotu.nums % time2 == 0){
			flivverLog++;
			meiweiLog++;

			if(flivverLog % 6 == 0||meiweiLog % 11 == 0){
				//flivver.push(getFlivver(2));
				//flivver.push(getFlivver(4));
				meiwei.push(getmeiwei(1));	
				meiwei.push(getmeiwei(3));
				meiwei.push(getmeiwei(2));
			}else if(flivverLog % 13 == 0||meiweiLog % 7 == 0){
				flivver.push(getFlivver(2));
				flivver.push(getFlivver(3));
				//meiwei.push(getmeiwei(2));
				//meiwei.push(getmeiwei(3));
				//meiwei.push(getmeiwei(4));
				//meiwei.push(getmeiwei(5));
			}else{
				flivver.push(getFlivver(1));
				//meiwei.push(getmeiwei(6));
			}
			
		}
		
		for(a in flivver){
			
			
			
			flivver[a].y += flivver[a].sudu;
			// 如果超出屏幕将该小粑粑删除
			if(flivver[a].y > 780){
				flivver.splice(a, 1);
			}
			// 将小粑粑画到画布上
			
			
			// 小粑粑死亡
			if(flivver[a].over > 0){
				flivver[a].over --;
				
				if(flivver[a].over > 20){
					cxt.drawImage(boo1,flivver[a].x + flivver[a].width/2 - 20  ,flivver[a].y + flivver[a].height / 2 -10,41,39);
				}else if(flivver[a].over > 2){
					cxt.drawImage(over,flivver[a].x + flivver[a].width/2 - 20 ,flivver[a].y + flivver[a].height / 2 -10,40,43);
				}else{
					flivver.splice(a, 1);
				}
				
				
				
			}else{
				cxt.drawImage(flivver[a].img,flivver[a].x,flivver[a].y,flivver[a].width,flivver[a].height);
				// 判断自己是否死亡
				if( me.x > (flivver[a].x - flivver[a].width + 20) && (me.x) <(flivver[a].x + flivver[a].width - 20) && (me.y) < (flivver[a].y + flivver[a].height + 20) && (me.y + 72) > (flivver[a].y - 20)){
					gameover();
				}
			
				if(flivver[a].hit > 0){
					cxt.drawImage(boo1,flivver[a].x + flivver[a].width/2 - 20 ,flivver[a].y + flivver[a].height / 2 -10,41,39);
					//cxt.drawImage(boo1,flivver[a].x + 5 ,flivver[a].y,41,39);
					flivver[a].hit--;
				}
			}
			
		}

	
	
			for(b in meiwei){
			
			
			
			meiwei[b].y += meiwei[b].sudu;
			// 如果超出屏幕将该小粑粑删除
			if(meiwei[b].y > 780){
				meiwei.splice(b, 1);
			}
			// 将小粑粑画到画布上
			
			
			// 小粑粑死亡
			if(meiwei[b].over > 0){
				meiwei[b].over --;
				
				if(meiwei[b].over > 20){
					cxt.drawImage(boo1,meiwei[b].x + meiwei[b].width/2 - 20  ,meiwei[b].y + meiwei[b].height / 2 -10,41,39);
				}else if(meiwei[b].over > 2){
					cxt.drawImage(over,meiwei[b].x + meiwei[b].width/2 - 20 ,meiwei[b].y + meiwei[b].height / 2 -10,40,43);
				}else{
					meiwei.splice(b, 1);
				}
				
				
				
			}else{
				cxt.drawImage(meiwei[b].img,meiwei[b].x,meiwei[b].y,meiwei[b].width,meiwei[b].height);
				// 判断自己是否死亡
				if( me.x > (meiwei[b].x - meiwei[b].width + 20) && (me.x) <(meiwei[b].x + meiwei[b].width - 20) && (me.y) < (meiwei[b].y + meiwei[b].height + 20) && (me.y + 72) > (meiwei[b].y - 20)){
					gameover();
				}
			
				if(meiwei[b].hit > 0){
					cxt.drawImage(boo1,meiwei[b].x + meiwei[b].width/2 - 20 ,meiwei[b].y + meiwei[b].height / 2 -10,41,39);
					//cxt.drawImage(boo1,flivver[a].x + 5 ,flivver[a].y,41,39);
					meiwei[b].hit--;
				}
			}
			
		}
	}
	
	
	
	// 更新自己的距离
	dotu.setMe = function(){
		cxt.drawImage(meImg,me.x,me.y,64,72);
	}
	
	// 更新子弹方法
	dotu.cartridge = function(){
		if(dotu.nums % 10 == 0){
			cartridges.push(new cartridge(me.x + 22,me.y));
		}
		
		for(i in cartridges){
			// 飞到顶部就将OBJ删除掉
			if(cartridges[i].y < 0){
				cartridges.splice(i, 1);
				continue;
			}
			
			
			cartridges[i].y -= 30;
			// 将小飞机画到画布上
			cxt.drawImage(cartridgeImg,cartridges[i].x,cartridges[i].y,25,25);
			
			// 子弹碰到飞机的情况
			for(j in flivver){
				if(flivver[j].over > 0){
					continue;
				}
				if(cartridges[i].x > flivver[j].x && cartridges[i].x < flivver[j].x+ flivver[j].width && cartridges[i].y >  flivver[j].y && cartridges[i].y -flivver[j].height < flivver[j].y){
					
					flivver[j].hit = 10;
					$('#isdz').html('打中了编号' + j);
					
					if(flivver[j].hp > 1){
						flivver[j].hp -= 80;
					}else{
						flivver[j].over = 40;
						//jifen += 5;
						//pjcj -= 0.5;
						wjcj += 1;
					}
					// 子弹消失
					cartridges.splice(i, 1);
					break;
				}
			}
			
			// 子弹碰到飞机的情况
			for(k in meiwei){
				if(meiwei[k].over > 0){
					continue;
				}
				if(cartridges[i].x > meiwei[k].x && cartridges[i].x < meiwei[k].x+ meiwei[k].width && cartridges[i].y >  meiwei[k].y && cartridges[i].y -meiwei[k].height < meiwei[k].y){
					
					meiwei[k].hit = 10;
					
					
					if(meiwei[k].hp > 1){
						meiwei[k].hp -= 80;
					}else{
						meiwei[k].over = 40;
						//jifen += 50000;
						
						//meiwei[k].cj += 2;
						if(meiwei[k].img == meiwei1){
						cj1 += 5;}
					else if(meiwei[k].img == meiwei2){
						cj2 += 5;}
					else if(meiwei[k].img == meiwei3){
						cj3 += 5;}
					else if(meiwei[k].img == meiwei4){
						cj4 += 5;}
					else if(meiwei[k].img == meiwei5){
						cj5 += 5;}
					else if(meiwei[k].img == meiwei6){
						cj6 += 5;}
						
						//pjcj = (cj1+cj2+cj3+cj4+cj5+cj6)/6;
						pjcj0 =(cj1+cj2+cj3)/3;
						pjcj=parseInt(pjcj0);
					}
					
					
					
					
					
					// 子弹消失
					cartridges.splice(i, 1);
					break;
				}
			}
			
		}
	}
	
	// 绑定鼠标事件
	/*c.addEventListener('mousemove', function onMouseMove(evt) {
		//me.x = evt.layerX - $('#dotu').offset().left - 32;
		//me.y = evt.layerY -  36 ;
		me.x = evt.layerX - 180;
		me.y = evt.layerY-36;
		//$('#sbX').html(me.x);
		//$('#sbY').html(me.y);
	});*/
	c.addEventListener('mousemove', function onTouchMove(evt) {
		//me.x = evt.layerX - $('#dotu').offset().left - 32;
		//me.y = evt.layerY -  36 ;
		me.x = evt.layerX+5 ;
		me.y = evt.layerY-36;
		//$('#sbX').html(me.x);
		//$('#sbY').html(me.y);
	});
	
	
	// 绑定触摸事件	
function touchStart(event) {
    //阻止网页默认动作（即网页滚动）
    event.preventDefault();
   
    var touch = event.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
}
c.addEventListener("touchstart", touchStart, false);

function touchMove(event) {
    event.preventDefault();
    var touch = event.touches[0];
       me.x = touch.pageX;
       me.y = touch.pageY;
    //这里是为了手指一定是横向滚动的,原理是计算X位置的偏移要比Y的偏移大
}
c.addEventListener("touchmove", touchMove, false);

function touchEnd(event) {
    canvas.removeChild(spirit);
    spirit = null;
}
c.addEventListener("touchend", touchEnd, false);
	
	
	
	
	fps = setInterval(dotu.update, 1000/100); 
}(cxt))


function newImg(src){
	var obj = new Image();
	obj.src = src;
	return obj;
}

//setInterval(h.update, 1000/65); 


}
