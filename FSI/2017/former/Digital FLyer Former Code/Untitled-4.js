$("table img").each(function () {
	"use strict";
		$(this).removeAttr('height');
		if($(this).attr('data')) {	
		alert($(this).attr('data'))	
		//tablerez = $(this).attr('data')		
		if($(this).attr('data')	 === 'asdf') {
		$(this).removeAttr('data');	
		}	
		if($(this).attr('data').indexOf("/") > -1) {	
		$(this).attr("data") && $(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='" + $(this).attr("data") + "'></a>");
		}	
		else {
		$(this).attr("data") && $(this).wrap("<a title='Click for " + $(this).attr("data") + "' href='http://www.pcrichard.com/catalog/catalog-product.jsp?prodId="+ $(this).attr("data") + "'></a>");	
		}
		}// JavaScript Document