var pages_amount = $(".fsi").length;
var pg1 = 0;
var menu_length = $('.submenu_button').length;	
var swipeinfo = 0;
var tvcallout = '<img class="additionalcallout" alt="Windows 10"  src="/images/promos/windows-10.png">';	
	
var resp, id,resp1, id1, resp2, id2,resp3, id3,resp4, id4,resp5, id5,resp6, id6,resp7, id7,resp8, id8,resp9, id9,resp10, id10,resp11, id11,resp12, id12,resp13, id13,resp14, id14,resp15, id15,resp16, id16,resp17, id17,resp18, id18,resp19, id19,resp20, id20,resp21, id21,resp22, id22 = "#pg0";
var myjax=0;var myjax2="";var myjax3="#pg0";var myjax5=0;var myjax6=100;var myjax7="#p0";var tableurl="";
var pg1first=0;var pg2first=0;var pg3first=0;var pg4first=0;var pg5first=0;var pg6first=0;var pg7first=0;var pg8first=0;var pg9first=0;var pg10first=0;var pg11first=0;var pg12first=0;var pg13first=0;var pg14first=0;var pg15first=0;var pg16first=0;var pg17first=0;var pg18first=0;var pg19first=0;var pg20first=0;var pg21first=0;var pg22first=0;
var pg1last=100;var pg2last=100;var pg3last=100;var pg4last=100;var pg5last=100;var pg6last=100;var pg7last=100;var pg8last=100;var pg9last=100;var pg10last=100;var pg11last=100;var pg12last=100;var pg13last=100;var pg14last=100;var pg15last=100;var pg16last=100;var pg17last=100;var pg18last=100;var pg19last=100;var pg20last=100;var pg21last=100;var pg22last=100;
var page1id="#p0";var page2id="#p0";var page3id="#p0";var page4id="#p0";var page5id="#p0";var page6id="#p0";var page7id="#p0";var page8id="#p0";var page9id="#p0";var page10id="#p0";var page11id="#p0";var page12id="#p0";var page13id="#p0";var page14id="#p0";var page15id="#p0";var page16id="#p0";var page17id="#p0";var page18id="#p0";var page19id="#p0";var page20id="#p0";var page21id="#p0";var page22id="#p0";
var ajaxtype1='';var ajaxtype2='';var ajaxtype3='';var ajaxtype4='';var ajaxtype5='';var ajaxtype6='';var ajaxtype7='';var ajaxtype8='';var ajaxtype9='';var ajaxtype10='';var ajaxtype11='';var ajaxtype12='';var ajaxtype13='';var ajaxtype14='';var ajaxtype15='';var ajaxtype16='';var ajaxtype17='';var ajaxtype18='';var ajaxtype19='';var ajaxtype20='';var ajaxtype21='';var ajaxtype22='';
var nu=0;var urlname='';
	
	
function marketing() {
 var gaPage = document.location.pathname;
 var gaHash = document.location.hash.replace('#',''); 
 var gaPCR_ad_version = $("ul.breadcrumbs.cf li a:eq(1)").text();
 var gaPageSection = $("#menu_box_desktop_name").text().trim();
 var gaVirtualPageName = gaPage + '/' + gaPageSection + '/' +gaHash;
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
 ga('create', 'UA-38154392-1', 'auto');
 ga('send','pageview', gaVirtualPageName);
ga('send','event', gaPCR_ad_version, gaPageSection, gaVirtualPageName);
	
}	
	

	
function runajaxcontent(){"use strict";urlname='#pg'+location.hash.replace('#','');if($(urlname+' .promo_box').length>0){switch(location.hash){case '#0':myjax5=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));myjax6=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete0();break;case '#1':pg1first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg1last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete1();break;case '#2':pg2first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg2last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete2();break;case '#3':pg3first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg3last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete3();break;case '#4':pg4first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg4last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete4();break;case '#5':pg5first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg5last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete5();break;case '#6':pg6first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg6last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete6();break;case '#7':pg7first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg7last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete7();break;case '#8':pg8first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg8last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete8();break;case '#9':pg9first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg9last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete9();break;case '#10':pg10first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg10last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete10();break;case '#11':pg11first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg11last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete11();break;case '#12':pg12first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg12last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete12();break;case '#13':pg13first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg13last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete13();break;case '#14':pg14first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg14last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete14();break;case '#15':pg15first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg15last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete15();break;case '#16':pg16first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg16last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete16();break;case '#17':pg17first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg17last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete17();break;case '#18':pg18first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg18last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete18();break;case '#19':pg19first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg19last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete19();break;case '#20':pg20first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg20last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete20();break;case '#21':pg21first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg21last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete21();break;case '#22':pg22first=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").first().attr("id").replace("p",""));pg22last=parseInt($("#pg"+location.hash.replace("#","")).children(".internalflyer").children(".promo_box").last().attr("id").replace("p",""));ajaxcomplete22();}}}
	
function ajaxcomplete0(){"use strict";if(myjax5<=myjax6){myjax7="#p"+myjax5.toString();tableurl=$(myjax7).attr("data");tableurl.indexOf("/")>-1?page0():page0a()}}
function ajaxcomplete1(){"use strict";if(pg1first<=pg1last){page1id="#p"+pg1first.toString();ajaxtype1=$(page1id).attr("data");ajaxtype1.indexOf("/")>-1?page1():page1a()}}
function ajaxcomplete2(){"use strict";if(pg2first<=pg2last){page2id="#p"+pg2first.toString();ajaxtype2=$(page2id).attr("data");ajaxtype2.indexOf("/")>-1?page2():page2a()}}
function ajaxcomplete3(){"use strict";if(pg3first<=pg3last){page3id="#p"+pg3first.toString();ajaxtype3=$(page3id).attr("data");ajaxtype3.indexOf("/")>-1?page3():page3a()}}
function ajaxcomplete4(){"use strict";if(pg4first<=pg4last){page4id="#p"+pg4first.toString();ajaxtype4=$(page4id).attr("data");ajaxtype4.indexOf("/")>-1?page4():page4a()}}
function ajaxcomplete5(){"use strict";if(pg5first<=pg5last){page5id="#p"+pg5first.toString();ajaxtype5=$(page5id).attr("data");ajaxtype5.indexOf("/")>-1?page5():page5a()}}
function ajaxcomplete6(){"use strict";if(pg6first<=pg6last){page6id="#p"+pg6first.toString();ajaxtype6=$(page6id).attr("data");ajaxtype6.indexOf("/")>-1?page6():page6a()}}
function ajaxcomplete7(){"use strict";if(pg7first<=pg7last){page7id="#p"+pg7first.toString();ajaxtype7=$(page7id).attr("data");ajaxtype7.indexOf("/")>-1?page7():page7a()}}
function ajaxcomplete8(){"use strict";if(pg8first<=pg8last){page8id="#p"+pg8first.toString();ajaxtype8=$(page8id).attr("data");ajaxtype8.indexOf("/")>-1?page8():page8a()}}
function ajaxcomplete9(){"use strict";if(pg9first<=pg9last){page9id="#p"+pg9first.toString();ajaxtype9=$(page9id).attr("data");ajaxtype9.indexOf("/")>-1?page9():page9a()}}
function ajaxcomplete10(){"use strict";if(pg10first<=pg10last){page10id="#p"+pg10first.toString();ajaxtype10=$(page10id).attr("data");ajaxtype10.indexOf("/")>-1?page10():page10a()}}
function ajaxcomplete11(){"use strict";if(pg11first<=pg11last){page11id="#p"+pg11first.toString();ajaxtype11=$(page11id).attr("data");ajaxtype11.indexOf("/")>-1?page11():page11a()}}
function ajaxcomplete12(){"use strict";if(pg12first<=pg12last){page12id="#p"+pg12first.toString();ajaxtype12=$(page12id).attr("data");ajaxtype12.indexOf("/")>-1?page12():page12a()}}
function ajaxcomplete13(){"use strict";if(pg13first<=pg13last){page13id="#p"+pg13first.toString();ajaxtype13=$(page13id).attr("data");ajaxtype13.indexOf("/")>-1?page13():page13a()}}
function ajaxcomplete14(){"use strict";if(pg14first<=pg14last){page14id="#p"+pg14first.toString();ajaxtype14=$(page14id).attr("data");ajaxtype14.indexOf("/")>-1?page14():page14a()}}
function ajaxcomplete15(){"use strict";if(pg15first<=pg15last){page15id="#p"+pg15first.toString();ajaxtype15=$(page15id).attr("data");ajaxtype15.indexOf("/")>-1?page15():page15a()}}
function ajaxcomplete16(){"use strict";if(pg16first<=pg16last){page16id="#p"+pg16first.toString();ajaxtype16=$(page16id).attr("data");ajaxtype16.indexOf("/")>-1?page16():page16a()}}
function ajaxcomplete17(){"use strict";if(pg17first<=pg17last){page17id="#p"+pg17first.toString();ajaxtype17=$(page17id).attr("data");ajaxtype17.indexOf("/")>-1?page17():page17a()}}
function ajaxcomplete18(){"use strict";if(pg18first<=pg18last){page18id="#p"+pg18first.toString();ajaxtype18=$(page18id).attr("data");ajaxtype18.indexOf("/")>-1?page18():page18a()}}
function ajaxcomplete19(){"use strict";if(pg19first<=pg19last){page19id="#p"+pg19first.toString();ajaxtype19=$(page19id).attr("data");ajaxtype19.indexOf("/")>-1?page19():page19a()}}
function ajaxcomplete20(){"use strict";if(pg20first<=pg20last){page20id="#p"+pg20first.toString();ajaxtype20=$(page20id).attr("data");ajaxtype20.indexOf("/")>-1?page20():page20a()}}
function ajaxcomplete21(){"use strict";if(pg21first<=pg21last){page21id="#p"+pg21first.toString();ajaxtype21=$(page21id).attr("data");ajaxtype21.indexOf("/")>-1?page21():page21a()}}
function ajaxcomplete22(){"use strict";if(pg22first<=pg22last){page22id="#p"+pg22first.toString();ajaxtype22=$(page22id).attr("data");ajaxtype22.indexOf("/")>-1?page22():page22a()}}	
	
	
	

function page0() {
	"use strict";
	myjax6 >= myjax5 ? 
		$.ajax({
		url: $(myjax7).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(myjax7).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(myjax7).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), myjax5++, ajaxcomplete0()
		},
		error: function () {
			ajaxcomplete0(), myjax5++
		}
	}) : (resp = "", id = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
function page1() {

	"use strict";
	pg1last >= pg1first ? 
		$.ajax({
		url: $(page1id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page1id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page1id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg1first++, ajaxcomplete1()
		},
		error: function () {
			ajaxcomplete1(), pg1first++
		}
	}) : (resp1 = "", id1 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
function page2() {

	"use strict";
	pg2last >= pg2first ? 
		$.ajax({
		url: $(page2id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page2id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page2id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg2first++, ajaxcomplete2()
		},
		error: function () {
			ajaxcomplete2(), pg1first++
		}
	}) : (resp2 = "", id2 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}			
function page3() {

	"use strict";
	pg3last >= pg3first ? 
		$.ajax({
		url: $(page3id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page3id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page3id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg3first++, ajaxcomplete3()
		},
		error: function () {
			ajaxcomplete3(), pg3first++
		}
	}) : (resp3 = "", id3 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
function page4() {

	"use strict";
	pg4last >= pg4first ? 
		$.ajax({
		url: $(page4id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page4id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page4id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg4first++, ajaxcomplete4()
		},
		error: function () {
			ajaxcomplete4(), pg4first++
		}
	}) : (resp4 = "", id4 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
function page5() {

	"use strict";
	pg5last >= pg5first ? 
		$.ajax({
		url: $(page5id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page5id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page5id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg5first++, ajaxcomplete5()
		},
		error: function () {
			ajaxcomplete5(), pg5first++
		}
	}) : (resp5 = "", id5 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}			
function page6() {

	"use strict";
	pg6last >= pg6first ? 
		$.ajax({
		url: $(page6id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page6id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page6id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg6first++, ajaxcomplete6()
		},
		error: function () {
			ajaxcomplete6(), pg6first++
		}
	}) : (resp6 = "", id6 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}			
function page7() {

	"use strict";
	pg7last >= pg7first ? 
		$.ajax({
		url: $(page7id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page7id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page7id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg7first++, ajaxcomplete7()
		},
		error: function () {
			ajaxcomplete7(), pg7first++
		}
	}) : (resp7 = "", id7 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
function page8() {

	"use strict";
	pg8last >= pg8first ? 
		$.ajax({
		url: $(page8id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page8id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page8id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg8first++, ajaxcomplete8()
		},
		error: function () {
			ajaxcomplete8(), pg8first++
		}
	}) : (resp8 = "", id8 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
function page9() {

	"use strict";
	pg9last >= pg9first ? 
		$.ajax({
		url: $(page9id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page9id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page9id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg9first++, ajaxcomplete9()
		},
		error: function () {
			ajaxcomplete9(), pg9first++
		}
	}) : (resp9 = "", id9 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}			
function page10(){"use strict";pg10last>=pg10first?$.ajax({url:$(page10id).attr("data"),timeout:4e3,type:"GET",cache:!1,success:function(t){$(page10id).not(".finished").children(".dynamic").html($("#productsList",t).html()),$(".qv").remove(),$(page10id).addClass("finished"),$(".promo_motion_data").delay(2e3).show(),$(".product").not(".wrapped").each(function(){$(this).wrap("<a title='Click for "+$(this).children(".product-content").children(".description").children("div.a").children("span.model").text()+"' href='"+$(this).children(".product-content").children(".image").children("div").children("a").attr("href")+"'></a>")}),pg10first++,$("#pg10 .compcallout .product").each(function(){$(this).append(tvcallout)}),ajaxcomplete10()},error:function(){ajaxcomplete10(),pg10first++}}):(resp10="",id10="",$(".product").each(function(){""===$(this).children(".product-content").children(".shop").children(".price").children("span.is").text()&&$(this).addClass("ex-largetext")}))}	
	
function page10() {
	"use strict";
	pg10last >= pg10first ? 
		$.ajax({
		url: $(page10id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page10id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page10id).addClass('finished'),
			 $(".promo_motion_data").delay(2e3).show(), 
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}),
				pg10first++,
				$('#pg10 .compcallout .product').each(function() {
	            $(this).append(tvcallout);	
	             })
				ajaxcomplete10()
		},
		error: function () {
			
			ajaxcomplete10(), pg10first++
		}
	}) : (resp10 = "", id10 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
	function page12() {
	"use strict";
	pg12last >= pg12first ? 
		$.ajax({
		url: $(page12id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page12id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page12id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg12first++, ajaxcomplete12()
		},
		error: function () {
			ajaxcomplete12(), pg12first++
		}
	}) : (resp12 = "", id12 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	

	
function page13() {

	"use strict";
	pg13last >= pg13first ? 
		$.ajax({
		url: $(page13id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page13id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page13id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg13first++, ajaxcomplete13()
		},
		error: function () {
			ajaxcomplete13(), pg13first++
		}
	}) : (resp13 = "", id13 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	

function page14() {

	"use strict";
	pg14last >= pg14first ? 
		$.ajax({
		url: $(page14id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page14id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page14id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg14first++, ajaxcomplete14()
		},
		error: function () {
			ajaxcomplete14(), pg14first++
		}
	}) : (resp14 = "", id14 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	

	
function page15() {

	"use strict";
	pg15last >= pg15first ? 
		$.ajax({
		url: $(page15id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page15id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page15id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg15first++, ajaxcomplete15()
		},
		error: function () {
			ajaxcomplete15(), pg15first++
		}
	}) : (resp15 = "", id15 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
function page16() {

	"use strict";
	pg16last >= pg16first ? 
		$.ajax({
		url: $(page16id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page16id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page16id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg16first++, ajaxcomplete16()
		},
		error: function () {
			ajaxcomplete16(), pg16first++
		}
	}) : (resp16 = "", id16 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
function page17() {

	"use strict";
	pg17last >= pg17first ? 
		$.ajax({
		url: $(page17id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page17id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page17id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg17first++, ajaxcomplete17()
		},
		error: function () {
			ajaxcomplete17(), pg17first++
		}
	}) : (resp17 = "", id17 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
function page18() {

	"use strict";
	pg18last >= pg18first ? 
		$.ajax({
		url: $(page18id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page18id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page18id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg18first++, ajaxcomplete18()
		},
		error: function () {
			ajaxcomplete18(), pg18first++
		}
	}) : (resp18 = "", id18 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
function page19() {

	"use strict";
	pg19last >= pg19first ? 
		$.ajax({
		url: $(page19id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page19id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page19id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg19first++, ajaxcomplete19()
		},
		error: function () {
			ajaxcomplete19(), pg19first++
		}
	}) : (resp19 = "", id19 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
	
	
	
function page20() {

	"use strict";
	pg20last >= pg20first ? 
		$.ajax({
		url: $(page20id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page20id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page20id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg20first++, ajaxcomplete20()
		},
		error: function () {
			ajaxcomplete20(), pg20first++
		}
	}) : (resp20 = "", id20 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
function page21() {

	"use strict";
	pg21last >= pg21first ? 
		$.ajax({
		url: $(page21id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page21id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page21id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg21first++, ajaxcomplete21()
		},
		error: function () {
			ajaxcomplete21(), pg21first++
		}
	}) : (resp21 = "", id21 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
	
	
function page22() {

	"use strict";
	pg22last >= pg22first ? 
		$.ajax({
		url: $(page22id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page22id).not('.finished').children(".dynamic").html($("#productsList", a).html()),
			$(".qv").remove(),
			$(page22id).addClass('finished'),	
				$(".tvcallout").children(".dynamic").children(".product").each(function () {
				$(this).append(tvcallout);
			}), $(".promo_motion_data").delay(2e3).show(), 
				
				$(".product").not(".wrapped").each(function () {
				$(this).wrap("<a title='Click for " + $(this).children(".product-content").children(".description").children("div.a").children("span.model").text() + "' href='" + $(this).children(".product-content").children(".image").children("div").children("a").attr("href") + "'></a>");
			}), pg22first++, ajaxcomplete22()
		},
		error: function () {
			ajaxcomplete22(), pg22first++
		}
	}) : (resp22 = "", id22 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
		
	
function page0a() {
	"use strict";
	myjax6 >= myjax5 ? $.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(myjax7).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(myjax7).children(".dynamic").html($(".sidebar-price-list", a).html()),$(myjax7).children(".promo_des_price").html($("h1", a).html()),$(myjax7).not(".singlepromo-multi").wrap("<a title='Click for " + $(myjax7).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(myjax7).attr("data") + "'></a>"), $(myjax7 + ".singlepromo-multi").wrap("<a title='Click for " + $(myjax7).attr("data2") + "' href='" + $(myjax7).attr("data2") + "'></a>"), myjax5++, ajaxcomplete0()
		},
		error: function () {
			ajaxcomplete0(), myjax5++
		}
	}) : (resp = "", id = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}


function page1a() {
	"use strict";
	pg1last >= pg1first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page1id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page1id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page1id).children(".promo_des_price").html($("h1", a).html()),$(page1id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page1id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page1id).attr("data") + "'></a>"), $(page1id + ".singlepromo-multi").wrap("<a title='Click for " + $(page1id).attr("data2") + "' href='" + $(page1id).attr("data2") + "'></a>"), pg1first++, ajaxcomplete1()
		},
		error: function () {
			ajaxcomplete1(), pg1first++
		}
	}) : (resp1 = "", id1 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


function page2a() {
	"use strict";
	pg2last >= pg2first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page2id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page2id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page2id).children(".promo_des_price").html($("h1", a).html()),$(page2id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page2id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page2id).attr("data") + "'></a>"), $(page2id + ".singlepromo-multi").wrap("<a title='Click for " + $(page2id).attr("data2") + "' href='" + $(page2id).attr("data2") + "'></a>"), pg2first++, ajaxcomplete2()
		},
		error: function () {
			ajaxcomplete2(), pg2first++
		}
	}) : (resp2 = "", id2 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


function page3a() {
	"use strict";
	pg3last >= pg3first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page3id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page3id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page3id).children(".promo_des_price").html($("h1", a).html()),$(page3id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page3id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page3id).attr("data") + "'></a>"), $(page3id + ".singlepromo-multi").wrap("<a title='Click for " + $(page3id).attr("data2") + "' href='" + $(page3id).attr("data2") + "'></a>"), pg3first++, ajaxcomplete3()
		},
		error: function () {
			ajaxcomplete3(), pg3first++
		}
	}) : (resp3 = "", id3 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


function page4a() {
	"use strict";
	pg4last >= pg4first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page4id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page4id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page4id).children(".promo_des_price").html($("h1", a).html()),$(page4id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page4id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page4id).attr("data") + "'></a>"), $(page4id + ".singlepromo-multi").wrap("<a title='Click for " + $(page4id).attr("data2") + "' href='" + $(page4id).attr("data2") + "'></a>"), pg4first++, ajaxcomplete4()
		},
		error: function () {
			ajaxcomplete4(), pg4first++
		}
	}) : (resp4 = "", id4 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


function page5a() {
	"use strict";
	pg5last >= pg5first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page5id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page5id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page5id).children(".promo_des_price").html($("h1", a).html()),$(page5id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page5id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page5id).attr("data") + "'></a>"), $(page5id + ".singlepromo-multi").wrap("<a title='Click for " + $(page5id).attr("data2") + "' href='" + $(page5id).attr("data2") + "'></a>"), pg5first++, ajaxcomplete5()
		},
		error: function () {
			ajaxcomplete5(), pg5first++
		}
	}) : (resp5 = "", id5 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


function page6a() {
	"use strict";
	pg6last >= pg6first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page6id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page6id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page6id).children(".promo_des_price").html($("h1", a).html()),$(page6id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page6id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page6id).attr("data") + "'></a>"), $(page6id + ".singlepromo-multi").wrap("<a title='Click for " + $(page6id).attr("data2") + "' href='" + $(page6id).attr("data2") + "'></a>"), pg6first++, ajaxcomplete6()
		},
		error: function () {
			ajaxcomplete6(), pg6first++
		}
	}) : (resp6 = "", id6 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	

function page7a() {
	"use strict";
	pg7last >= pg7first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page7id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page7id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page7id).children(".promo_des_price").html($("h1", a).html()),$(page7id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page7id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page7id).attr("data") + "'></a>"), $(page7id + ".singlepromo-multi").wrap("<a title='Click for " + $(page7id).attr("data2") + "' href='" + $(page7id).attr("data2") + "'></a>"), pg7first++, ajaxcomplete7()
		},
		error: function () {
			ajaxcomplete7(), pg7first++
		}
	}) : (resp7 = "", id7 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


function page8a() {
	"use strict";
	pg8last >= pg8first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page8id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page8id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page8id).children(".promo_des_price").html($("h1", a).html()),$(page8id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page8id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page8id).attr("data") + "'></a>"), $(page8id + ".singlepromo-multi").wrap("<a title='Click for " + $(page8id).attr("data2") + "' href='" + $(page8id).attr("data2") + "'></a>"), pg8first++, ajaxcomplete8()
		},
		error: function () {
			ajaxcomplete8(), pg8first++
		}
	}) : (resp8 = "", id8 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	



function page9a() {
	"use strict";
	pg9last >= pg9first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page9id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page9id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page9id).children(".promo_des_price").html($("h1", a).html()),$(page9id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page9id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page9id).attr("data") + "'></a>"), $(page9id + ".singlepromo-multi").wrap("<a title='Click for " + $(page9id).attr("data2") + "' href='" + $(page9id).attr("data2") + "'></a>"), pg9first++, ajaxcomplete9()
		},
		error: function () {
			ajaxcomplete9(), pg9first++
		}
	}) : (resp9 = "", id9 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
function page10a() {
	"use strict";
	pg10last >= pg10first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page10id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page10id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page10id).children(".promo_des_price").html($("h1", a).html()),$(page10id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page10id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page10id).attr("data") + "'></a>"), $(page10id + ".singlepromo-multi").wrap("<a title='Click for " + $(page10id).attr("data2") + "' href='" + $(page10id).attr("data2") + "'></a>"), pg10first++, ajaxcomplete10()
		},
		error: function () {
			ajaxcomplete10(), pg10first++
		}
	}) : (resp10 = "", id10 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
	
	
function page11a() {
	"use strict";
	pg11last >= pg11first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page11id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page11id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page11id).children(".promo_des_price").html($("h1", a).html()),$(page11id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page11id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page11id).attr("data") + "'></a>"), $(page11id + ".singlepromo-multi").wrap("<a title='Click for " + $(page11id).attr("data2") + "' href='" + $(page11id).attr("data2") + "'></a>"), pg11first++, ajaxcomplete11()
		},
		error: function () {
			ajaxcomplete11(), pg11first++
		}
	}) : (resp11 = "", id11 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	

function page12a() {
	"use strict";
	pg12last >= pg12first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page12id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page12id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page12id).children(".promo_des_price").html($("h1", a).html()),$(page12id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page12id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page12id).attr("data") + "'></a>"), $(page12id + ".singlepromo-multi").wrap("<a title='Click for " + $(page12id).attr("data2") + "' href='" + $(page12id).attr("data2") + "'></a>"), pg12first++, ajaxcomplete12()
		},
		error: function () {
			ajaxcomplete12(), pg12first++
		}
	}) : (resp12 = "", id12 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}
	
	
	function page13a() {
	"use strict";
	pg13last >= pg13first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page13id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page13id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page13id).children(".promo_des_price").html($("h1", a).html()),$(page13id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page13id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page13id).attr("data") + "'></a>"), $(page13id + ".singlepromo-multi").wrap("<a title='Click for " + $(page13id).attr("data2") + "' href='" + $(page13id).attr("data2") + "'></a>"), pg13first++, ajaxcomplete13()
		},
		error: function () {
			ajaxcomplete13(), pg13first++
		}
	}) : (resp13 = "", id13 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


	function page14a() {
	"use strict";
	pg14last >= pg14first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page14id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page14id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page14id).children(".promo_des_price").html($("h1", a).html()),$(page14id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page14id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page14id).attr("data") + "'></a>"), $(page14id + ".singlepromo-multi").wrap("<a title='Click for " + $(page14id).attr("data2") + "' href='" + $(page14id).attr("data2") + "'></a>"), pg14first++, ajaxcomplete14()
		},
		error: function () {
			ajaxcomplete14(), pg14first++
		}
	}) : (resp14 = "", id14 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}
	
	function page15a() {
	"use strict";
	pg15last >= pg15first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page15id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page15id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page15id).children(".promo_des_price").html($("h1", a).html()),$(page15id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page15id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page15id).attr("data") + "'></a>"), $(page15id + ".singlepromo-multi").wrap("<a title='Click for " + $(page15id).attr("data2") + "' href='" + $(page15id).attr("data2") + "'></a>"), pg15first++, ajaxcomplete15()
		},
		error: function () {
			ajaxcomplete15(), pg15first++
		}
	}) : (resp15 = "", id15 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
	function page16a() {
	"use strict";
	pg16last >= pg16first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page16id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page16id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page16id).children(".promo_des_price").html($("h1", a).html()),$(page16id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page16id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page16id).attr("data") + "'></a>"), $(page16id + ".singlepromo-multi").wrap("<a title='Click for " + $(page16id).attr("data2") + "' href='" + $(page16id).attr("data2") + "'></a>"), pg16first++, ajaxcomplete16()
		},
		error: function () {
			ajaxcomplete16(), pg16first++
		}
	}) : (resp16 = "", id16 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}
	
	
	
	function page17a() {
	"use strict";
	pg17last >= pg17first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page17id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page17id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page17id).children(".promo_des_price").html($("h1", a).html()),$(page17id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page17id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page17id).attr("data") + "'></a>"), $(page17id + ".singlepromo-multi").wrap("<a title='Click for " + $(page17id).attr("data2") + "' href='" + $(page17id).attr("data2") + "'></a>"), pg17first++, ajaxcomplete17()
		},
		error: function () {
			ajaxcomplete17(), pg17first++
		}
	}) : (resp17 = "", id17 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
	function page18a() {
	"use strict";
	pg18last >= pg18first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page18id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page18id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page18id).children(".promo_des_price").html($("h1", a).html()),$(page18id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page18id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page18id).attr("data") + "'></a>"), $(page18id + ".singlepromo-multi").wrap("<a title='Click for " + $(page18id).attr("data2") + "' href='" + $(page18id).attr("data2") + "'></a>"), pg18first++, ajaxcomplete18()
		},
		error: function () {
			ajaxcomplete18(), pg18first++
		}
	}) : (resp18 = "", id18 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	function page19a() {
	"use strict";
	pg19last >= pg19first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page19id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page19id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page19id).children(".promo_des_price").html($("h1", a).html()),$(page19id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page19id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page19id).attr("data") + "'></a>"), $(page19id + ".singlepromo-multi").wrap("<a title='Click for " + $(page19id).attr("data2") + "' href='" + $(page19id).attr("data2") + "'></a>"), pg19first++, ajaxcomplete19()
		},
		error: function () {
			ajaxcomplete19(), pg19first++
		}
	}) : (resp19 = "", id19 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}		
	
	
	function page20a() {
	"use strict";
	pg20last >= pg20first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page20id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page20id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page20id).children(".promo_des_price").html($("h1", a).html()),$(page20id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page20id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page20id).attr("data") + "'></a>"), $(page20id + ".singlepromo-multi").wrap("<a title='Click for " + $(page20id).attr("data2") + "' href='" + $(page20id).attr("data2") + "'></a>"), pg20first++, ajaxcomplete20()
		},
		error: function () {
			ajaxcomplete20(), pg20first++
		}
	}) : (resp20 = "", id20 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	



	function page21a() {
	"use strict";
	pg21last >= pg21first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page21id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page21id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page21id).children(".promo_des_price").html($("h1", a).html()),$(page21id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page21id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page21id).attr("data") + "'></a>"), $(page21id + ".singlepromo-multi").wrap("<a title='Click for " + $(page21id).attr("data2") + "' href='" + $(page21id).attr("data2") + "'></a>"), pg21first++, ajaxcomplete21()
		},
		error: function () {
			ajaxcomplete21(), pg21first++
		}
	}) : (resp21 = "", id21 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	


	function page22a() {
	"use strict";
	pg22last >= pg22first ?
		$.ajax({
		url: "/global/modals/modal-pdp-qv.jsp?modal=true&prodId=" + $(page22id).attr("data"),
		timeout: 4e3,
		type: "GET",
		cache: false,
		success: function (a) {
			$(page22id).children(".dynamic").html($(".sidebar-price-list", a).html()),$(page22id).children(".promo_des_price").html($("h1", a).html()),$(page22id).not(".singlepromo-multi").wrap("<a title='Click for " + $(page22id).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId=" + $(page22id).attr("data") + "'></a>"), $(page22id + ".singlepromo-multi").wrap("<a title='Click for " + $(page22id).attr("data2") + "' href='" + $(page22id).attr("data2") + "'></a>"), pg22first++, ajaxcomplete22()
		},
		error: function () {
			ajaxcomplete22(), pg22first++
		}
	}) : (resp22 = "", id22 = "", $(".product").each(function () {
		"" === $(this).children(".product-content").children(".shop").children(".price").children("span.is").text() && $(this).addClass("ex-largetext")
	}))
}	
	
	
	
	
	
function wrapProgramFx(fxinfo) {
	$(fxinfo).not('.finished').each(function() {
	$(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>").addClass('finished');
	});	
}
		
	
function wrapprogram() {	
	    wrapProgramFx(".promo_box_940");
	    wrapProgramFx(".promo_box_33");
	    wrapProgramFx(".promo_box_50");
	    wrapProgramFx(".promo_box_66");
	    $(".internalflyer table").each(function() {
		$(this).not('.finished').attr('width' , '100%').removeAttr('height').removeAttr('id');
		$(this).attr("role", "presentation");
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
		$(this).not('.finished').wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>");
		$(this).addClass('finished');	
		}
		else {
		$(this).not('.finished').wrap("<a title='Click for " + $(this).attr("data") + "' href='/catalog/catalog-product.jsp?prodId="+ $(this).attr("data") + "'></a>");
		$(this).addClass('finished');	
		}				
		}	
		
	})
}
	

	
$(document).ready(function() {
	


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
		
$("#pages_total").text(pages_amount);
$("#pageof").val(parseInt(location.hash.replace('#' ,''))+1);
while(pages_amount > pg1) {
$(".menu_number_overflow").append('<div id="menuFSI' + pg1 + '" class="menu_item" data="' + pg1 + '" data2="'+$('#pg'+pg1).attr('data2')+'">' + parseInt(pg1+1) + "</div>");
$(".mobilemenu_content").append('<div id="menuFSI' + pg1 + '" class="menu_item_small" data="' + pg1 + '">' + parseInt(pg1+1) + "</div>");
pg1++;
}	
	

	
if(window.location.hash != ''){
$('#pg'+location.hash.replace('#' ,'')).not('finished').html(eval('content_page'+location.hash.replace('#' ,'')));
$('#pg'+location.hash.replace('#' ,'')).addClass('finished');
$(".promo_box").each(function () {$(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++});	
wrapprogram();
$("#pg"+location.hash.replace('#' ,'')).css('display', 'block');
$("#menuFSI"+location.hash.replace('#' ,'')).addClass("menu_clicked_class");
$('#menu_box_desktop_name strong').text($('#pg'+location.hash.replace('#' ,'')).attr('data2'));	
runajaxcontent();
marketing();
}
	else{
	window.location.hash = '#0';
	$('#pg0').html(content_page0);
	$('#pg0').addClass('finished');
	$(".promo_box").each(function () {$(this).attr("id", "p" + nu), $(this).append('<div class="dynamic"></div>'), nu++});		
	wrapprogram();
	$("#pg0").css('display', 'block');
	$(".left_arrow").css('display', 'none');
	$("#menuFSI0").addClass("menu_clicked_class");
	$('#menu_box_desktop_name strong').text($('#pg'+location.hash.replace('#' ,'')).attr('data2'));
    runajaxcontent();	
	marketing();	
}
		
$(".menu_item").click(function() {
location.hash = $(this).attr('data');
$('.fsi').css('display' , 'none');
$('#pg'+location.hash.replace('#' ,'')).not('.finished').html(eval('content_page'+location.hash.replace('#' ,'')));
	
$('#pg'+location.hash.replace('#' ,'')).addClass('finished');	
$(".promo_box").each(function () {$(this).attr("id", "p" + nu), $(this).not('.loaded').append('<div class="dynamic"></div>').addClass('loaded'), nu++});			
wrapprogram();	
$('#pg'+location.hash.replace('#' ,'')).show();
$("#pageof").val(parseInt(location.hash.replace('#' ,''))+1);
$(".menu_item").removeClass('menu_clicked_class');	
$("#menuFSI"+location.hash.replace('#' ,'')).addClass("menu_clicked_class");
$(window).scrollTop(0);
$('#menu_box_desktop_name strong').text($('#pg'+location.hash.replace('#' ,'')).attr('data2'));	
runajaxcontent();
marketing();
});
	
$(".right_arrow").click(function () {
		$("#menuFSI" + eval(parseInt(location.hash.replace("#", "")) + 1)).click();
		$('.left_arrow').fadeIn();
	});
$(".left_arrow").click(function () {
		$("#menuFSI" + eval(parseInt(location.hash.replace("#", "")) - 1)).click()
	});
$('#pageof').keypress(function (e) {
  if (e.which == 13) {
	var pageof_num =$(this).val()-1
    $("#menuFSI"+pageof_num.toString()).click()
  }
});		
$('.submenu_button').click(function() {
$(".submenu_button").css("color", "#333")
$(this).css("color", "#cf171f")
$("#menuFSI"+$(this).attr('data')).click();
$(".mobilemenu_content").hide()
});	
$('#submenu').show();
	
$('.menu_item_small').click(function() {
$(".mobilemenu_content").hide(), $("#menu_box_mobile").show(),  $("#menuFSI" + $(this).attr("data")).click()	
})
	
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
	
$("#menu_box_mobile").click(function () {
		$(".fsi").hide(), $("html, body").animate({
			scrollTop: "0px"
		}), $(".mobilemenu_content").show(), $(this).hide()
	})


//swipe tech

		$(".mobilemenu_content").swipe({
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
	})

$(document).on("scroll", function () {
		$("#menu_box_mobile").css("top", "0px").css("position", "fixed"), 0 === $(window).scrollTop() && $($("#menu_box_mobile").css("position", "relative"))
	})

	
});