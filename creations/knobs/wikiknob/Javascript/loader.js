var newHash;
var docTitle = document.title;
var currentURL = '';
var buffer = false;

perpetualtrig();
function perpetualtrig(){
	buffer = false;
    setTimeout( perpetualtrig, 3000);
}


$(function() {

        $(window).bind("hashchange", function(){
            newHash = window.location.hash.substring(1);
			
			if(newHash){

				if(newHash == 'home'){
					cleaner();
				}else{
					cleaner();
                	//launcher(newHash);
				}
			}
			oldHash = newHash;
        });
        //$(window).trigger("hashchange");
});

var framselect = 1;
function launcher(t){	////////////INPUT SELECTOR
	setTimeout(function(){ 
// iframe LOAD
		if(framselect>2){
			framselect = 1;
		}else{
			$("#iFrameInput"+framselect).attr("src", t); ////////////GO IFRAME
			$("#iFrameInput"+framselect).css({'opacity': 1});
			console.log(t);
			framselect=framselect+1;
		}
		$("#experienceContainer").css({'z-index': ''});
			//$("#id").html('<p>'+t+'</p>');
		$("#id").css({'opacity': 1});
	}, 0);
	
};
function cleaner(){	
	 $("#iFrameInput1, #id").css({'opacity': 0});
	setTimeout(function(){ 
		$("#id").empty();
		$("#iFrameInput1").attr("src", '');
	}, 250);
};

function grabber(url){
	currentURL = url;
	launcher(url);
};
function backHome(){	
	window.location.hash = 'home';
};
