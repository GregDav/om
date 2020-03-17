var newHash;
var docTitle = document.title;
var currentURL = '';
var buffer = false;

perpetualtrig();
function perpetualtrig(){
	buffer = false;
    setTimeout( perpetualtrig, 1000);
}


$(function() {

        $(window).bind("hashchange", function(){
            newHash = window.location.hash.substring(1);
			
			if(newHash){

				if(newHash == 'home'){
					cleaner();
				}else{
					cleaner();
                	launcher(newHash);
					
			

				}
			}
			oldHash = newHash;
        });
        $(window).trigger("hashchange");
});


function launcher(t){	////////////INPUT SELECTOR
	setTimeout(function(){ 
// iframe LOAD
		$("#iFrameInput").attr("src", currentURL); ////////////GO IFRAME
		$("#iFrameInput").css({'opacity': 1});
		$("#experienceContainer").css({'z-index': ''});
			//$("#id").html('<p>'+t+'</p>');
		
		$("#id").css({'opacity': 1});
	}, 300);
	
};
function cleaner(){	
	 $("#iFrameInput, #id").css({'opacity': 0});
	setTimeout(function(){ 
		$("#id").empty();
		$("#iFrameInput").attr("src", '');
	}, 250);
};

function grabber(t, url){
   	window.location.hash = t;
	currentURL = url;
};
function backHome(){	
	window.location.hash = 'home';
};
