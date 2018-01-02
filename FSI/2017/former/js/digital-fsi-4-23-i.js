var menu_length = $('.submenu_button').length;
	
function catnamesys() {
	"use strict";
opencat = $("#pg" + location.hash.replace("#", "")).attr('data2');
	$('.menu_item').hide();
	$(".menu_item[data2='"+opencat+"']").show();
}	
	
	
function runajaxcontent() {
	"use strict";
	myjax7 = "#p" + myjax5.toString(), tableurl = $(myjax7).attr("data"), tableurl.indexOf("/") > -1 ? runajaxcontent2() : runajaxcontent3()
}

function runajaxcontent2() {
	"use strict";
	myjax6 >= myjax5 ? $.ajax({
		url: $(myjax7).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(myjax7).children(".dynamic").html($("#productsList", a).html()), $(".qv").remove(), $(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), $(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), myjax5++, runajaxcontent()
		},
		error: function () {
			runajaxcontent(), myjax5++
		}
	}) : (resp = "", id = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}

function runajaxcontent3() {
	"use strict";
	myjax6 >= myjax5 ? $.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(myjax7).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(myjax7).children(".dynamic").html($(".sidebar-price-list", a).html()),$(myjax7).children(".promo_des_price").html($("h1", a).html()),$(myjax7).not(".singlepromo-multi").wrap("<a title='Click for " + $(myjax7).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(myjax7).attr("data") + "'></a>"), $(myjax7 + ".singlepromo-multi").wrap("<a title='Click for " + $(myjax7).attr("data2") + "' href='" + $(myjax7).attr("data2") + "'></a>"), myjax5++, runajaxcontent()
		},
		error: function () {
			runajaxcontent(), myjax5++
		}
	}) : (resp = "", id = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}

	

function wrapprogram() {
	    "use strict";
	    $(".promo_box_940").not('.finished').each(function () {
		$(this).attr("data") && $(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>").addClass('finished');
	}), $(".promo_box_33").not('.finished').each(function () {
		$(this).attr("data") && $(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>").addClass('finished');
	}), $(".promo_box_50").not('.finished').each(function () {
		$(this).attr("data") && $(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>").addClass('finished');
	}), $(".promo_box_66").not('.finished').each(function () {
		$(this).attr("data") && $(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>").addClass('finished');
	}), $(".internalflyer table").each(function() {
		$(this).not('.finished').attr('width' , '100%').removeAttr('height').removeAttr('id');
		}),
			
		$('.fsi video').click(function() {
	    $(this).css('max-height' , 'inherit');
		$(this).prop('controls', true);
		this.play();
        }),		
			
		$("table img").each(function () {	
		$(this).removeAttr('height');
		if($(this).attr('data')) {		
		if($(this).attr('data').indexOf("/") > -1) {	
		$(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>");
		}
		else {
		$(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='/catalog/catalog-product.jsp?prodId="+ $(this).attr("data") + "'></a>");	
		}				
		}	
			
		
			
	})
}
var pg1 = 0,
	pages_amount = $(".fsi").length,
	propernumber = eval(parseInt(location.hash.replace("#", "")) + 1),
	pages_amount = $(".fsi").length,
	tableurl = "",
	submenu_button = "",
	menu_animation = "-42%",
	nu = 0,
	swipeinfo = 0,
	resp, id = "#p0",
	myjax = 0,
	myjax2 = "",
	myjax3 = "#pg0",
	myjax5 = 0,
	myjax6 = 100,
	myjax7 = "#p0",
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Nov.", "December"],
	getlocation = location.hash,
	POWERREVIEWS, animation_type = "no slide",
	page_change_movement = 50,
	show_additional_menu = 1,
	enddate = "28th",
	tvcallout = '<img class="additionalcallout" alt="Online Only"  src="/images/promos/4-2-17-Available_online_only.png">',
	loadpage = "",
	opencat = "";
$(document).ready(function () {
	"use strict";
$('#submenu').mouseover(function() {
 $(this).css('overflow-x' , 'auto').css('overflow-y' , 'hidden');
});

$('#submenu').mouseout(function() {

$(this).css('overflow-x' , 'hidden');
});  


$('#submenu').bind('touchstart', function(){
    $(this).css('overflow-x' , 'auto').css('overflow-y' , 'hidden');
}).bind('touchend', function(){
    
});
    


  if ($('#fsi_wrapper').width() === 751	 ){
		  $('.submenu_overflow').css('width' , menu_length * 110+ 'px');
 
       }
	
	  if ($('#fsi_wrapper').width() === 750	 ){
		  $('.submenu_overflow').css('width' , menu_length * 110+ 'px');
 
       }


 if ($('#fsi_wrapper').width() < 700	 ){
      $('.submenu_overflow').css('width' , menu_length * 95 + 'px');
         

       }
 
	
	if ($('#fsi_wrapper').width() > 751	 ){
     $('.submenu_overflow').css('width' , menu_length * 110 + 'px');
	   	   
	   }
	
	
	
	$( window ).resize(function() {
	  if ($('#fsi_wrapper').width() === 751	 ){
		  $('.submenu_overflow').css('width' , menu_length * 110+ 'px');
 
       }
	
	  if ($('#fsi_wrapper').width() === 750	 ){
		  $('.submenu_overflow').css('width' , menu_length * 110+ 'px');
 
       }


 if ($('#fsi_wrapper').width() < 700	 ){
      $('.submenu_overflow').css('width' , menu_length * 95 + 'px');
         

       }
 
	
	if ($('#fsi_wrapper').width() > 751	 ){
     $('.submenu_overflow').css('width' , menu_length * 110 + 'px');
	   	   
	   }
	
	
	
});

	
	for ($("#pages_total").text(pages_amount), -1 !== location.href.indexOf("#") ? ($("#pg" + location.hash.replace("#", "")).show(), $("#pageof").val(propernumber)) : ($("#pg0").delay(600).show(), location.hash = "0", $("#pageof").val("1")), 1 === show_additional_menu && $("#submenu").show(), $(".fsi").each(function () {
			$(this).attr("title", eval(parseInt($(this).attr("id").replace("pg", "")) + 1))
		}); pages_amount > pg1;) $(".menu_number_overflow").append('<div id="menuFSI' + pg1 + '" class="menu_item" data="' + pg1 + '" data2="'+$('#pg'+pg1).attr('data2')+'">' + $("#pg" + pg1).attr("title") + "</div>"), $(".mobilemenu_content").append('<div id="menuFSI' + pg1 + '" class="menu_item_small" data="' + pg1 + '">' + $("#pg" + pg1).attr("title") + "</div>"), pg1++;
	"#0" === location.hash ? ($("#pg0").load($("#pg0").attr("data"), $(".left_arrow").css('display', 'none'), function () {
		wrapprogram(), $(".promo_box").each(function () {
			$(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++
		}), myjax5 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), myjax6 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), setTimeout(runajaxcontent, 200), swipeinfo = parseInt(location.hash.replace("#", "")), $("#menuFSI" + swipeinfo.toString()).click()
	}), $("#menuFSI0").addClass("menu_clicked_class")) : ($("#pg" + location.hash.replace("#", "")).load($("#pg" + location.hash.replace("#", "")).attr("data"), function () {
		wrapprogram(), $(".promo_box").each(function () {
			$(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++
		}), myjax5 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), myjax6 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), setTimeout(runajaxcontent, 200), swipeinfo = parseInt(location.hash.replace("#", "")), $("#menuFSI" + swipeinfo.toString()).click()
	}), $("#menuFSI" + parseInt(location.hash.replace("#", ""))).addClass("menu_clicked_class"), location.hash.replace("#", "") > page_change_movement ? ($(".menu_number_overflow").css({
		left: menu_animation
	}), $(".menu_move_top_right").hide(), $(".menu_move_top_left").show()) : ($(".menu_move_top_right").show(), $(".menu_move_top_left").hide())), $(".menu_item").click(function () {
		
		
		
		return !$(this).attr("myclicker") && ($(".menu_item").removeAttr("myclicker").removeClass("menu_clicked_class"),$('.left_arrow').fadeIn(),$(".promo_motion_data").hide(), location.hash = $(this).attr("data"),$('#menu_box_desktop_name h2').text($("#pg" + location.hash.replace("#", "")).attr('data2')), catnamesys(),
				  
											  $("#pageof").val(eval(parseInt($(this).attr("data")) + 1)), $(this).addClass("imclicked").addClass("menu_clicked_class"), "slide" === animation_type ? ($(".fsi").hide(), $("#pg" + location.hash.replace("#", "")).slideDown()) : ($(".fsi").hide(), $("#pg" + location.hash.replace("#", "")).show()), $(this).attr("data") > page_change_movement ? 
											  
									  
											  ($(".menu_number_overflow").animate({
			//left: menu_animation
		}), $(".menu_move_top_right").hide(), $(".menu_move_top_left").show()) : ($(".menu_number_overflow").animate({
			left: "0"
		}), $(".menu_move_top_right").show(), $(".menu_move_top_left").hide()), 15 > pages_amount && $(".menu_move_top_right").hide(), void $(this).addClass("imclicked").addClass("menu_clicked_class").attr("myclicker", "0"))
		
	}), $(".menu_move_top_right").click(function () {
		$(".menu_number_overflow").animate({
			left: menu_animation
		}), $(".menu_move_top_left").show(), $(this).hide()
	}), $(".menu_move_top_left").click(function () {
		$(".menu_number_overflow").animate({
			left: "0"
		}), $(".menu_move_top_right").show(), $(this).hide();
		
	}), $("#menu_box_mobile").click(function () {
		$(".fsi").hide(), $("html, body").animate({
			scrollTop: "0px"
		}), $(".mobilemenu_content").show(), $(this).hide()
	}), $(".mobilemenu_content").swipe({
		swipeLeft: function () {
			$(".mobilemenu_content").hide(), $("#pg" + eval(location.hash.replace("#", ""))).show()
		},
		swipeRight: function () {},
		fingers: 1,
		threshold: 150,
		excludedElements: ".noSwipe"
	}), $("#menu_box_mobile").swipe({
		swipeLeft: function () {
			swipeinfo = parseInt(location.hash.replace("#", "")) + 1, $("#menuFSI" + swipeinfo.toString()).click(), $("html, body").animate({
				scrollTop: "0px"
			})
		},
		swipeRight: function () {
			$("html, body").animate({
				scrollTop: "215px"
			}), $(".fsi").hide(), $(".mobilemenu_content").show(), $("#menu_box_mobile").hide()
		},
		fingers: 1,
		threshold: 150,
		excludedElements: ".noSwipe"
	}), $(".fsi").swipe({
		swipeLeft: function () {
			swipeinfo = parseInt(location.hash.replace("#", "")) + 1, $("#menuFSI" + swipeinfo.toString()).click(), $("html, body").animate({
				scrollTop: "0px"
			})
		},
		swipeRight: function () {
			$("html, body").animate({
				scrollTop: "215px"
			}), $(".fsi").hide(), $(".mobilemenu_content").show(), $("#menu_box_mobile").hide()
		},
		fingers: 1,
		threshold: 150,
		excludedElements: ".noSwipe"
	}), $("a.linkerwrap").swipe({
		swipeLeft: function () {
			swipeinfo = parseInt(location.hash.replace("#", "")) + 1, $("#menuFSI" + swipeinfo.toString()).click(), $("html, body").animate({
				scrollTop: "0px"
			})
		},
		swipeRight: function () {
			$("html, body").animate({
				scrollTop: "215px"
			}), $(".fsi").hide(), $(".mobilemenu_content").show(), $("#menu_box_mobile").hide()
		},
		fingers: 1,
		threshold: 150,
		excludedElements: ".noSwipe"
	}), 
		$(".right_arrow").click(function () {
		$("#menuFSI" + eval(parseInt(location.hash.replace("#", "")) + 1)).click();
		$('.left_arrow').fadeIn();
	}), $(".left_arrow").click(function () {
		$("#menuFSI" + eval(parseInt(location.hash.replace("#", "")) - 1)).click()
	}), $(document).on("scroll", function () {
		$("#menu_box_mobile").css("top", "0px").css("position", "fixed"), 0 === $(window).scrollTop() && $($("#menu_box_mobile").css("position", "relative"))
	}), $("table").each(function () {
		$(this).attr("role", "presentation")
	}), $(".product").each(function () {
		$(this).attr("id", "p" + nu), nu++
	}), $("table tr td img").each(function () {
		tableurl = $(this).attr("data"), "asdf" === tableurl ? $(this).removeAttr("data") : (tableurl = $(this).attr("data"), tableurl.indexOf("/") > -1 ? $(this).wrap('<a title="Click For ' + $(this).attr("data") + '" href="http://www.pcrichard.com' + $(this).attr("data") + '"></a>') : $(this).wrap('<a title="Click For ' + $(this).attr("data") + '" href="http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=' + $(this).attr("data") + '"></a>'))
	}), $(".submenu_button").not(".imclicked").click(function () {
		$(".submenu_button").css("color", "#333"), $(this).css("color", "#cf171f"), submenu_button = $(this).attr("data"), $(".mobilemenu_content").hide(), $("#menuFSI" + submenu_button).click(), $(".submenu_button").removeClass("imclicked"), $(this).addClass("imclicked")
	}), $(".promo_motion").hover(function () {
		$('.promo_motion_data[data="' + $(this).attr("data") + '"]').children(".promo_des").css("text-decoration", "underline")
	}, function () {
		$('.promo_motion_data[data="' + $(this).attr("data") + '"]').children(".promo_des").css("text-decoration", "none")
	}), $(".promo_box_50", ".promo_box_66", ".promo_box_33", ".image-promos").not(".noclick").click(function () {
		return document.location = $(this).attr("data"), !1
	}), $(".prelink", ".singlepromo-multi").click(function () {
		return document.location = $(this).attr("data2"), !1
	}), $(".product").not(".prelink").not(".singlepromo-multi").click(function () {
		return document.location = $(this).children(".product-content").children(".description").children(".title").children("a").attr("href"), !1
	}), $(".singlepromo", ".promo_motion", ".game_promos", ".promo_motion_data").not(".singlepromo-multi").click(function () {
		document.location = "http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(this).attr("data")
	}), 0 === $("#pg" + location.hash.replace("#", "")).children(".promo_box").length || (myjax5 = parseInt($("#pg" + location.hash.replace("#", "")).children(".promo_box").first().attr("id").replace("p", "")), myjax6 = parseInt($("#pg" + location.hash.replace("#", "")).children(".promo_box").last().attr("id").replace("p", "")), setTimeout(runajaxcontent, 200)), 15 > pages_amount && $(".menu_move_top_right").hide()
}), $(window).load(function () {
	"use strict";
   $( ".submenu_button[data='"+location.hash.replace("#", "")+"']").children('i').css('color' , 'rgb(207, 23, 31)');
	"?" === $(location).attr("href").substr(-1) && (location.hash = "#0", location.reload()), "#" === $(location).attr("href").substr(-1) && (location.hash = "#0", location.reload()), window.onhashchange = function () {
		$( ".submenu_button").children('i').css('color', '#000');
		$( ".submenu_button").children('.undermenu').css('color', '#000');
		$( ".submenu_button[data='"+location.hash.replace("#", "")+"']").children('i').css('color' , 'rgb(207, 23, 31)');
		$( ".submenu_button[data='"+location.hash.replace("#", "")+"']").children('.undermenu').css('color' , 'rgb(207, 23, 31)');
		$("#pg" + location.hash.replace("#", "")).load($("#pg" + location.hash.replace("#", "")).attr("data"), function () {


			wrapprogram(), $(".promo_box").each(function () {
				$(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++
			}), myjax5 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p", "")), myjax6 = parseInt($("#pg" + location.hash.replace("#", "")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p", "")), setTimeout(runajaxcontent, 200), swipeinfo = parseInt(location.hash.replace("#", "")), $("#menuFSI" + swipeinfo.toString()).click()
		})
	}, $(".menu_item_small").click(function () {
		$(".mobilemenu_content").hide(), $("#menu_box_mobile").show(), submenu_button = $(this).attr("data"), $("#menuFSI" + submenu_button).click()
	})
	
	$('#pageof').keypress(function (e) {
  if (e.which == 13) {
	var pageof_num =$(this).val()-1
    $("#menuFSI"+pageof_num.toString()).click()
  }
});	

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height  > 90) {
        $('#submenu').addClass('fixed_menu')
		 $('#menu_box_desktop').addClass('fixed_menu2')
    }
	if(height  < 160) {
        $('#submenu').removeClass('fixed_menu')
		$('#menu_box_desktop').removeClass('fixed_menu2')
    }
});	
		
})
