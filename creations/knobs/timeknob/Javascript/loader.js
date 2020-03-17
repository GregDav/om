var docTitle = document.title;
var framselect = 1;
var gotoURL;

function launcher(i){	////////////CROSS FADER
	//bottom frame
	$("#iFrameInput"+framselect).css({'z-index': 0, 'opacity': 1}); 
	$("#iFrameInput"+framselect).attr("src", targetlist[i]); //GO IFRAME
	$("#id").css({'opacity': 0});
	$("#id").empty();
	document.title = docTitle + " . " + symbol[i];
	//$("#id").html('<p>'+symbol[i]+'</p>');	
	setTimeout(function(){ //bottom go top
		$("#iFrameInput"+framselect).css({'z-index': 1});
		$("#id").css({'opacity': 1});
		//top frame select
		if(framselect>=2){framselect = 1;}else{framselect=framselect+1;} 
		$("#iFrameInput"+framselect).css({'opacity': 0, 'z-index':0});
		$("#iFrameInput"+framselect).attr("src", '');
	}, 0);	
	
	$("#experienceContainer").css({'z-index': ''});
	
};

function grabber(i){
	launcher(i); //launch url
	gotoURL = targetlist[i];
	$('#through').css({display: 'block'});
	//$("#through").attr("href", targetlist[i]);
};
function backHome(){	
	window.location.hash = 'home';
};
function goThrough(){
	$('#knob').css({transform: 'scale(15)'});
	$('#knob, #handleout, #handlein').css({opacity:0});
	$('#outerknob').css({'box-shadow':'none'});
	setTimeout(function(){ //bottom go top
		window.location.href = gotoURL;
	}, 500);
}