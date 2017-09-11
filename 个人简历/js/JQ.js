$(function(){
	// 首页
	$(".shouye p").css("animation","xiangxia 2s").css("animation-fill-mode","forwards");
	
	//导航固定
    $(window).scroll(function(){
  	
       var a=$(window).scrollTop();
       var b=$(".shouye").height();
       if(a>=b)
     {
     	$(".daohang").css("position","fixed").css("top","0px");
  	
     }
       else
     {
     	$(".daohang").css("position","absolute");
  	
     }
  	
  	})
  	//轮播
              var index=0;
				$(".wo-1 ul li").hover(function(){
					 index=$(this).index();
					$(this).addClass('on').siblings().removeClass('on');
					$(".wo-2 img").eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();											
				});
					setInterval(function(){			
					index++;
					index%=5;
					$(".wo-1 ul li").eq(index).addClass("on").siblings().removeClass("on");
					$(".wo-2 img").eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();				
				},1800);
  	
  
   	
	
	
	
	
})










