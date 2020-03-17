var framselect = 1;
var gotoURL;
var watchKnob =false;


function launcher(i){	////////////CROSS FADER
	//create top frame
	$("#frame"+framselect).html("<iframe class='iFrameInput' allowFullScreen='true' src='"+targetlist[i]+"' frameborder='0'></iframe>");
	$("#frame"+framselect).css({'opacity': 1, 'z-index': '1'});
	if(framselect>=2){framselect = 1;}else{framselect=framselect+1;} 
	$("#frame"+framselect).css({'z-index': '0'});
	setTimeout(function(){
		$("#frame"+framselect).css({'opacity': 0});
		$("#frame"+framselect).empty();
	},500);
	
	

	$("#experienceContainer").css({'z-index': ''});
	
};

function grabber(i){
	launcher(i); //launch url
	gotoURL = targetlist[i];
	$('#through').css({display: 'block'});
	//$("#through").attr("href", targetlist[i]);
};

function goThrough(){
	
	if(gotoURL == undefined){ //if door closed (no through)
			/*$('#id').append("<div id='error'>undefined</div>");
			setTimeout(function(){
				$('#error').remove();
			}, 200);*/
		window.location.href= window.location.href+"?in"; //go through door

	}else{
		$('#knob').css({transform: 'scale(3)'});
		$('#knob, #handleout, #handlein').css({opacity:0});
		$('#outerknob').css({'box-shadow':'none'});
		$('#through').css({'display':'none'});
		setTimeout(function(){ //bottom go top
			watchKnob = true;
			callbackKnob(); //bring back the knob if still on the page (in case of pushstate)
			window.location.href= gotoURL+"?in";
		}, 200);	
	}
	
}
function callbackKnob(){
	setTimeout(function(){
		if(watchKnob == true){
			loadKnob();
			watchKnob = false;
		}else{
			callbackKnob();
		}
	},100);
		
}