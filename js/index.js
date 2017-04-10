/**
 * Created by Administrator on 2017/3/10.
 */
$(function(){	
	var i=0;
	var clone=$(".fs_col2 .img li").first().clone();
	$('.fs_col2 .img').append(clone);
	var size=$(".fs_col2 .img li").length;	
//			console.log($(".fs_col2 .img li"));
//			console.log(size);
	for(var j=0;j<size-1;j++){
		$('.fs_col2 .num').append('<li></li>');
	}
	$(".fs_col2 .num li").first().addClass("on");	
	/*鼠标划入圆点*/
	$(".fs_col2 .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".fs_col2 .img").stop().animate({left:-index*790},790)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move();
	},3000)	
	/*对banner定时器的操作*/
	$(".fs_col2").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move();
		},3000)
	})	
	/*向左的按钮*/
	$(".fs_col2 .btn_l").click(function(){
		i--;
		move();	
	})		
	/*向右的按钮*/
	$(".fs_col2 .btn_r").click(function(){
		i++;
		move();				
	})	
	function move(){		
		if(i==size-1){
			$(".fs_col2  .img").css({left:0});			
			i=0;
		}	
		if(i==-1){
			$(".fs_col2 .img").css({left:-(size-1)*790});
			i=size-2;
		}		
		$(".fs_col2 .img").stop().animate({left:-i*790},790);		
		if(i==size-1){
			$(".fs_col2 .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{		
			$(".fs_col2 .num li").eq(i).addClass("on").siblings().removeClass("on");
		}				
	}
	
})

function noticeInit() {
    // 获取通知栏所有操作对象
    var oHeadUl = document.getElementsByClassName('tab_head')[0];
    var oBoardDiv = document.getElementsByClassName('tab_content')[0];
    var aTitles = oHeadUl.getElementsByTagName('a');
    var aBoardUls = oBoardDiv.getElementsByTagName('div');

    var nNoticeLen = Math.min(aBoardUls.length,aTitles.length);
//  console.log('the len is: ' + nNoticeLen);
    function resetStyleNotice() {
        for (var i = 0; i < nNoticeLen; i++){
            aBoardUls[i].style.display = "none";
        }
    }
    for (var i = 0; i < nNoticeLen; i++){
        (function (n) {
            aTitles[n].onmouseover = function () {
                // 复位样式
                resetStyleNotice();
                console.log('rest success!');
                // 设置当前样式
                aBoardUls[n].style.display = "block";
            };
        })(i);
    }
    var newfirst=$('.news_first');
    var newslast=$('.news_last');
    newslast.mouseover(function(){
    	$('.news_tab_active').animate({left:'53px'}) 	
    })
    newfirst.mouseover(function(){
    		$('.news_tab_active').animate({left:'0px'})
    	})
}

$(document).ready(function(){
	noticeInit();
	$('#j_event_close').click(function(){
		console.log('广告已删除');
		$(this).parent().parent().remove();
	})
	//二维码 下拉显示
	$('.code,.mobile_static,.j_mobile_pop').mouseover(function(){
		$('.j_mobile_pop').css('display','block');
	})
	$('.code,.mobile_static,.j_mobile_pop').mouseout(function(){
		$('.j_mobile_pop').css('display','none');
	})
	//定位下拉
	$('.ui-areamini-text-wrap,.dorpdown-layer,.hide').mouseover(function(){
		$('.ui-areamini-text-wrap').css('background-color','#fff');
		$('.dorpdown-layer').css('display','block');
		$('.hide').css('display','block');	
	})
	$('.ui-areamini-text-wrap,.dorpdown-layer,.hide').mouseout(function(){
		$('.ui-areamini-text-wrap').css('background-color','#e3e4e5');
		$('.dorpdown-layer').css('display','none');
		$('.hide').css('display','none');
	})
	
	var aAddr = ['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外'];
	console.log(aAddr);
	var a= $('a[data-id]');	
	a.mouseover(function(){
		var aa = a.index($(this));
		
		a.click(function(index){
			var i=index;
			console.log(aa);
			console.log(i);
			$('.ui-areamini-text').text(aAddr[aa]);
		})
		

	})
	
})

var intDiff = parseInt(7200);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值        
    if(intDiff > 0){
      day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (hour <=9) hour ='0'+hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show').html(day+"天");
    $('#hour_show').html('<s id="h"></s>'+hour);
    $('#minute_show').html('<s></s>'+minute);
    $('#second_show').html('<s></s>'+second);
    intDiff--;
    }, 1000);
} 
$(function(){
    timer(intDiff);
});