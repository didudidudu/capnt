		
$(function(){
	//三大优势
	$(".header .header-advantage p").not(".header .header-advantage p:first-child").hover(function(e){
		$(".header .header-advantage p:first-child").css("left",$(this).data("id"));
		e.stopPropagation();
	});
	//菜单栏
	$(".content .content-header .content-header-nav ul li").hover(function(e){
		$(this).find("ul").stop().slideDown(200);
//		e.stopPropagation();
	},function(e){
		$(this).find("ul").stop().slideUp(200);
//		e.stopPropagation();
	});
	//服务平台
	//$(".service-options .option .option-img").mouseover(function(){
	//	$(this).css("background","url(img/v2.png)");
	//}).mouseout(function(){
	//	$(this).css("background","url(img/v1.png)");
	//});
	$(".service-options .option .option-img").hover(function(e){
		$(this).css("background","url(img/v2.png)").css("opacity","1").parents(".option").siblings().find(".option-img").css("background","url(img/v1.png)")
	});
	//专利数据
	$(".content-data .data-content .content-img .resp-div").hover(function(e){
		$(this).find("span").css('-webkit-animation','living 2s linear infinite');
		$(this).find("span:last-child").css('-webkit-animation-delay','1s');
		$(this).find("p").css('background-color',RGBAtoRGB($(this).find("p").css("background-color")));
//		$(this).find(".whitebg").show();
		e.stopPropagation();
	},function(e){
		$(this).find("span").css('-webkit-animation','none');
		$(this).find("span:last-child").css('-webkit-animation-delay','none');
		$(this).find("p").css('background-color',RGBtoRGBA($(this).find("p").css("background-color"),"0.5"));
//		$(this).find(".whitebg").hide();
	}).click(function(e){
		e.preventDefault();
	});
	//IE下专利数据效果
	if(!!window.ActiveXObject || "ActiveXObject" in window){
		$(".content-data .data-content .content-img .resp-div").hover(function(e){
			$(this).find("span").css("transform","scale(1.2)").css("transition-timing-function","ease").css("transition","0.5s");
			e.stopPropagation();
		},function(e){
			$(this).find("span").css("transform","scale(1)").css("transition-timing-function","ease").css("transition","0.5s");
			e.stopPropagation();
		})
	}
	
	//链接
	$(".content .content-qa .qa-items").hover(function(e){
		$(".content .content-qa .qa-items .question img").css('transform','scale(1.1)');
//		$(".content .content-qa .qa-items .question p").css('transform','scale(1.1)');
	},function(e){
		$(".content .content-qa .qa-items .question img").css('transform','scale(1)');
//		$(".content .content-qa .qa-items .question p").css('transform','scale(1)');
	});
	//知识产权局链接
	$(".footer .footer-link .link-more .more").on("click",function(e){
		$(this).parent().find("ul").stop().slideToggle(200);
		e.stopPropagation();
	});
	$("body").on("click",function(e){
		$(".footer .footer-link .link-more ul").stop().slideUp(200);
		e.stopPropagation();
	});
});
//轮播图初始化
$(function(){
    $('#skippr').skippr({
    	childrenElementType: 'img',
//		    	easing: "easeInCubic",
    	transition: 'fade',
    	speed: 1000,
    	navType: "bubble",
    	arrows: false,
    	autoPlay: true,
    	autoPlayDuration: 2000
    });
});
//颜色格式转换
function RGBAtoRGB(color){
	arr = color.split("(")[1].split(")")[0].split(",");
	arr.pop();
	return "rgb("+arr.join(",")+")";
}
function RGBtoRGBA(color,opacity){
	arr = color.split("(")[1].split(")")[0].split(",");
	arr.push(opacity);
	return "rgba("+arr.join(",")+")";
}
