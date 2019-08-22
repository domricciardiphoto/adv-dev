
/**
 * 
 */
$(document).ready(function(){
    $('#submitRSVP').click(function(e){
    	doRSVP('SAVE-RSVP');
    });

    $('#cancelRSVP').click(function(e){
    	if (confirm("Are you sure you want to cancel your reservation?")){
    		handleAttending('NO');    		
    	}
    });
    
    $(".resetAdditionalGolfer").click(function(e){
    	if (confirm("Are you sure you want to clear this golfer's information?")){
    		//stay
    	}else{
    		return;
    	}
    	
    	//console.log("Clearing golfer #" + $(this).attr("golferNumber"));
    	
    	eval("document.rsvpForm.hotelGolfer" + $(this).attr("golferNumber") + "Day1.checked=false");
    	eval("document.rsvpForm.hotelGolfer" + $(this).attr("golferNumber") + "Day2.checked=false");
    	eval("document.rsvpForm.firstName" + $(this).attr("golferNumber") + ".value=''");
    	eval("document.rsvpForm.lastName" + $(this).attr("golferNumber") + ".value=''");
    	eval("document.rsvpForm.title" + $(this).attr("golferNumber") + ".value=''");
    	eval("document.rsvpForm.email" + $(this).attr("golferNumber") + ".value=''");
    	eval("document.rsvpForm.handicap" + $(this).attr("golferNumber") + ".value=''");
    	eval("document.rsvpForm.shirtSize" + $(this).attr("golferNumber") + "[0].checked=false");
    	eval("document.rsvpForm.shirtSize" + $(this).attr("golferNumber") + "[1].checked=false");
    	eval("document.rsvpForm.shirtSize" + $(this).attr("golferNumber") + "[2].checked=false");
    	eval("document.rsvpForm.shirtSize" + $(this).attr("golferNumber") + "[3].checked=false");
    	eval("document.rsvpForm.shirtSize" + $(this).attr("golferNumber") + "[4].checked=false");
    	eval("document.rsvpForm.clubRental" + $(this).attr("golferNumber") + "[0].checked=false");
    	eval("document.rsvpForm.clubRental" + $(this).attr("golferNumber") + "[1].checked=false");
    	eval("document.rsvpForm.clubRental" + $(this).attr("golferNumber") + "[2].checked=false");
	});
    
    //set initial view of page
    if (document.rsvpForm.company.value!=""){
      handleAttending('YES');
    }
});

function setPageProcessing(){
	$("#submitRSVP").attr("disabled", "disabled");
	$("#cancelRSVP").attr("disabled", "disabled");
	$("BODY").css("cursor", "wait");
	
	$("#message").html("&nbsp;");
	$("#message").removeClass("success error");
}

function setPageNotProcessing(){
	$("#submitRSVP").removeAttr("disabled");
	$("#cancelRSVP").removeAttr("disabled");
	$("BODY").css("cursor", "");
}

function doRSVP(type){
	setPageProcessing();
	
	if (type=='RSVP-NO' || type=='CNCL-RSVP'){
		document.rsvpForm.rsvp.value="N";
	}else{
		document.rsvpForm.rsvp.value="Y";
	}

	var xhr=$.ajax({
	    cache: false,
	    url: 'rsvp.php',
	    data: buildSearchData(document.rsvpForm),
	    accept: "application/json",
	    type: 'POST',
	    async:true,
	    success: function(data) {
	      setPageNotProcessing();
	      //console.log("Success, returned data below");
	      //console.log(data);
	      if (type=='RSVP-NO'){
	    	alert(data.returnDesc);
	      }else{
	    	$("#message").html(data.returnDesc);
	    	if (data.returnCode=='*SUCCESS'){
	    		$("#message").addClass("success");
	    	}else{
	    		$("#message").addClass("error");
	    	}
	      }
	    },
	    error: function(xhr, status, error) {
	    	setPageNotProcessing();
	    	//console.log("Error: error data below");
	    	//console.log(xhr);
	    	//console.log(status);
	    	//console.log(error);
		    if (type=='RSVP-NO'){
		      alert("Please try again");
		    }else{
		      $("#message").html("Please try again");
		      $("#message").addClass("error");
		    }
	    }
	});
}

function handleAttending(attending){
	$("#rsvpInitial").hide();
	
	//console.log("Attending: " + attending);
	if (attending.toUpperCase()=="YES"){
		$("#attendingInformation").slideDown('medium');
	}else{
		$("#attendingInformation").slideUp('fast');
		doRSVP('RSVP-NO');
	}
}