$(function(){
	// Header Scroll
	$(window).scroll(function(){
		var wh = $(this).scrollTop();
		if (0 < wh){
			$("#header").addClass("head_top");
		} else {
			$("#header").removeClass("head_top");
		}
	});
	$("#header").on("mouseenter", function(){
		$("#header").addClass("head_on");
	}).on("mouseleave", function(){
		var wh = $(window).scrollTop();
		if (0 < wh){
		}else{
			$("#header").removeClass("head_on");
		}
	});

	$("#header .hd_util .btn").click(function(){
		$("#header .hd_util ul").slideToggle(300);
	})

	// Footer Top - tail.php로 이동
	/*$(".btn_top").on("click", function(e){
		e.preventDefault();
		$("html, body").animate( { scrollTop : 0 }, 500 );
	});*/

	//LANGUAGE
	$(".btn_lang").click(function(){
		$(".lang").toggleClass("on");
		$(".lang > ul").slideToggle(400);
	})

});

function Size_pc(){
	// GNB
	$(".gnb > ul > li").hover(function(){
		//$(".gnb_dep2").stop().slideDown(300);
		$(this).children('.gnb_dep2').stop().slideDown(300);
	},function(){
		$(".gnb_dep2").stop().slideUp(300);
		//$(this).children('.gnb_dep2').stop().slideDown(300);
	});	
	

	// Quick
	/*$(".quick").animate( { "top": $(document).scrollTop() + 305}, 400 );

	$(window).scroll(function(){
		var sct2 = $(window).scrollTop();
		if(sct2 > 200){
			$(".quick").stop();
			$(".quick").animate( { "top": $(document).scrollTop() + 305 + "px" }, 400 );
		}else{
			$(".quick").stop();
			$(".quick").animate( { "top": 305}, 400 );
		};

		if($(window).scrollTop() < $(document).height() - $(window).height() - $(".footer").height() - ($(".btn_top").height()*2) + 230){
			$(".btn_top").addClass("on");
		}else{
			$(".btn_top").removeClass("on");
		}
		if($(window).scrollTop() > 700 ){
			$(".btn_top").fadeIn(400);
		}else{
			$(".btn_top").fadeOut(400);
		}
	});*/
}

function Size_mobile(){
	$(".btn_mo_menu").on("click", function(e){
		e.preventDefault();
		if ($(this).is(".op") == true){
			$("html").css("overflow","visible");
			$("body").css("overflow","visible");
			$(".header").removeClass("sc");
			$(".pop_bg").fadeOut();
			$(this).removeClass("op");
			$(".gnb").removeClass("op");
		} else {
			$("html").css("overflow","hidden");
			$("body").css("overflow","hidden");
			$(".header").addClass("sc");
			$(".pop_bg").fadeIn();
			$(this).addClass("op");
			$(".gnb").addClass("op");
		}
	});

	$(".gnb > li > a").on("click", function(e){
		e.preventDefault();
		if ($(this).parent().is(".mview")){
			$(".gnb > li").removeClass("mview");
			$(this).parent().find("subm").removeClass("mview");
			$(".gnb .subm").slideUp(400);
			//console.log("aaaa");
		} else {
			$(".gnb > li").removeClass("mview");
			$(this).parent().addClass("mview");
			$(this).parent().find("subm").addClass("mview");
			$(".gnb .subm").slideUp(400);
			$(this).parent().find(".subm").slideDown(400);
			//console.log("dddd");
		}
	});
}

$(window).load(function(){//사이트 최초 접속 시
	var screen_size = $(window).width();
	if(screen_size > 800){
		Size_pc();
	}else{
		Size_mobile();
	}
});

$(window).resize(function(){//사이즈 리사이징 시
	var screen_size = $(window).width();
	if(screen_size > 800){
		Size_pc();
	}else{
		$(".btn_mo_menu").off("click");
		$(".gnb > li > a").off("click");
		Size_mobile();
	}
});

$(window).resize(function(){//사이즈 리사이징 시
   var screen_size = $(window).width();
   if(screen_size > 800){
      $(".gnb > li").off("mouseenter");
      
      Size_pc();
   }else{
      $(".btn_mo_menu").off("click");
      $(".gnb > li > a").off("click");
      $('.section1').addClass('active');
      $('.s0104 .section2 ').addClass('active');
      Size_mobile();
   }
});



function goBack(){
	window.history.back();
}
$(document).ready(function(){
	$(".btn_back_script").bind("click",function(){
		goBack();
	});

	//main Business area
	$('.bs_sld_tab_tit li').on('click',function(){
		var i = $(this).index();

		$('.bs_sld_tab_tit li').removeClass('on');
		$(this).addClass('on');

		$('.bs_sldtab_cont').fadeOut(200);
		$('.bs_sldtab_cont').eq(i).fadeIn(400);
		$('.bs_sldtab_cont').removeClass('on');
		$('.bs_sldtab_cont').eq(i).addClass('on');
		$('.slick-slider').slick('setPosition');
	});

	//제품소개 > 내용 3줄 말줄임표 처리
	$('#gall_ul > li > .gall_con .gall_text_href p').each(function(){		
		console.log('mobile')
		$(this).each(function(){
			if($(this).text().length >= 70){
				$(this).text($(this).text().substr(0,70)+'...');
			}
		});
	})


		//lnb
var winW = $(window).width();

if(winW<=1024){
	
	$('.m_lnb_sd a').on('click',function(){
		$(this).next('.slnb_ul').stop().slideToggle(400);
	});
}

});

function layerpopup2(names,url){
	var names = names;
	var pop_width = $(window).outerWidth();
	var pop_height = $(window).outerHeight();
	if(pop_width >= 600){
		pop_width = 600;
	}else if(pop_width < 600 && pop_width > 480){
		pop_width = $(window).width() - 50;
	}else if(pop_width <= 480){
		pop_width = $(window).width() - 50;
	}
	if(pop_height >= 600){
		pop_height = 400;
	}else if(pop_height < 600 && pop_height > 300){
		pop_height = $(window).height() - 50;
	}else if(pop_height <= 300){
		pop_height = $(window).height() - 50;
	}
	$(".layer_popup").dialog({
		resizable : false,
		width : pop_width,
		height : pop_height,
		dialogClass : false,
		modal : true,
		title : names,
		position : {
			my : "center center",
			at : "center center",
			of : window
		},
		open : function(event, ui){
			$("html").css({overflow : "hidden"});
			document.getElementById("lay_pop").innerHTML="<iframe src="+url+" id='uni_iframe'></iframe>";
		},
		beforeClose : function(event,ui){
			$("html").css({overflow : "inherit"});
		},
		show : {
			effect : "drop",
			duration : 800,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 800,
			direction : "up"
		}
	});
}


function layerpopup(names){
	var names = names;
	var pop_width = $(window).outerWidth();
	var pop_height = $(window).outerHeight();
	if(pop_width >= 600){
		pop_width = 600;
	}else if(pop_width < 600 && pop_width > 480){
		pop_width = $(window).width() - 50;
	}else if(pop_width <= 480){
		pop_width = $(window).width() - 50;
	}
	if(pop_height >= 600){
		pop_height = 400;
	}else if(pop_height < 600 && pop_height > 300){
		pop_height = $(window).height() - 50;
	}else if(pop_height <= 300){
		pop_height = $(window).height() - 50;
	}
	$(".layer_popup").dialog({
		resizable : false,
		width : pop_width,
		height : pop_height,
		dialogClass : false,
		modal : true,
		title : names,
		position : {
			my : "center center",
			at : "center center",
			of : window
		},
		open : function(event, ui){
			$("html").css({overflow : "hidden"});
		},
		beforeClose : function(event,ui){
			$("html").css({overflow : "inherit"});
		},
		show : {
			effect : "drop",
			duration : 800,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 800,
			direction : "up"
		}
	});
}

$(function(){
		$(".top_button").click(
			function(){
				$("html, body").animate({"scrollTop":0},800);
			}
		);
	}
);

$(
	function(){
		$(".quick .q_1").click(
			function(){
				//$(this).parent().css("overflow","visible");
				$(".quick_over").animate({"right":"0px"},1000);
		});	
		$(".quick_over").click(
			function(){
				//$(this).parent().css("overflow","hidden");
				$(".quick_over").animate({"right":"-269px"},1000);
		});		
});
$(function() {
        $(".mv_scroll").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top-140}, 500);
        });
});


jQuery(document).ready(function() {
	jQuery(window).scroll(function() {
		if(jQuery(document).scrollTop() > 500) {
			jQuery('.btn_top').fadeIn();
		} else {
			jQuery('.btn_top').fadeOut();
		};
	});

	//main tab:: PARTNER
	$('.tab_tit_wrap ul li').on('click',function(){
		$('.tab_tit_wrap ul li').removeClass('on');
		$(this).addClass('on');

		var i = $(this).index();
		$('.tab_cont_wrap .tab_cont').removeClass('on');
		$('.tab_cont_wrap').children('.tab_cont').eq(i).addClass('on');
	});


	$('.main_sec04_box, .what_section_box').append('<div class="line_tp"></div>');
	$('.main_sec04_box, .what_section_box').append('<div class="line_lt"></div>');
	$('.main_sec04_box, .what_section_box').append('<div class="line_rt"></div>');
	$('.main_sec04_box, .what_section_box').append('<div class="line_bt"></div>');


	//모바일버튼 클릭시
	$('.m_btn').on('click',function(){
		$('.m_nav_wrap').stop().animate({'right':'0'});	
	});

	$('.gnb_btn').on('click',function () {
        var gnb_btn_lines =$(this).children('.gnb_btn_inner').children('div')
        gnb_btn_lines.toggleClass('gnb_on');

		
		 if(gnb_btn_lines.hasClass('gnb_on')){
            $('.m_nav_wrap').stop().animate({'right':'0','box-shadow':'0 3px 40px 0 rgba(69, 69, 96, 0.6)'});
           // $('.m_nav_wrap').css({'box-shadow':'0 3px 40px 0 rgba(69, 69, 96, 0.6)'});
			$('.m_bg').fadeIn();
        }else{
            $('.m_nav_wrap').stop().animate({'right':'-65%','box-shadow':'none'});
           // $('.m_nav_wrap').css({'box-shadow':'none'});
			$('.m_bg').fadeOut();
        }
	});

	//모바일 닫기버튼 클릭시
	$('.m_close_btn, .m_bg').on('click',function(){
		$('.m_nav_wrap').stop().animate({'right':'-65%'});
		$('.m_bg').fadeOut();
		$('.gnb_btn div').removeClass('gnb_on')
	});

	//모바일 메뉴 클릭시 아코디언
	$('.m_g_dep1').next('ul').hide();
	$('.m_g_dep1').on('click',function(){
		$(this).toggleClass('on');
		$(this).next('ul').slideToggle();
		$('.m_g_dep1').not(this).removeClass('on');
		$('.m_g_dep1').not(this).next('ul').slideUp();
		return false;
	});

});

