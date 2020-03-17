 var rotating = false;
 var outerknob = $('#outerknob');
 var knob = $('#knob');
 var rad;
 var elOfs;
 var elPos;
 
 var i;
 var handle = [];
var ang = [];
var col = [];
 var projStrength;
 var projDeg = 45;
 var toDeg;
 var currentProj = 0;

 var j;
 var lang = [];
 var langStrength;
 var currentLang;
var datetime;
var block = false;
var allowKnobLoad = true;

perpetualtrigger();
function perpetualtrigger(){

    setTimeout( perpetualtrigger, 1000);
}

function loadKnob(){
	 if ( window.location !== window.parent.location ) { //inside an iframe hide knob
		$('#knob').css({display: 'none'}); 
	 } else { //in its original location do load knob 
		if (window.location.href.indexOf("?in") >= 0){ //open the door through URL injection
			updateProj(0);
		}
		 
		if(targetlist.length==1 && allowKnobLoad == true){// if only one destination & if not from pushback, go through directly
			window.location.replace(targetlist[0]);
		}else{ //if multiple destination load knob
			$('#knob').css({display: 'inline-block', transform: 'scale(1)', opacity:1}); 
			$('#id').css({'font-size': '16px', margin:'-20vh 0 0 1vh', 'letter-spacing':'20px', 'line-height':'20px', 'width':'100%', 'display':'block'}); 
			$("#knob").bind("contextmenu", function(e){//right click
			 		e.preventDefault();
			});
			$('#through').css({'display':'block'});
			setTimeout(function(){ //bottom go top
				rad = knob.width() / 2;
				elOfs = knob.offset();
 				elPos = {
 					x: elOfs.left,
 					y: elOfs.top
 				}
				$('#handleout, #handlein').css({opacity:1});
				if(allowKnobLoad == true){
					
					
				$("#through").bind("contextmenu", function(){//right click
					$('#through').css({'display':'none'});	
					setTimeout(function(){
						$('#through').css({'display':'block'});		
					}, 500);
					window.history.back();
				});	
				$(document).bind("wheel", function(){//general scroll
			 		if (event.deltaY < 0){
						projDeg = projDeg+7;
						knobRotate();
				 		//window.history.back();
			 		}else if (event.deltaY > 0){
						projDeg = projDeg-7;
						knobRotate();
				 		//goThrough();			 		
					}	
		 		});
					allowKnobLoad = false;
				}
			}, 1000);

		 }
	 }
 	// newHash = window.location.hash.substring(1); //not working
	 processData();
	 
	 for (i = 0; i < targetlist.length; i++) {
		 if(window.location.hash.substring(1) == handle[i]) {
			//grabber(i);
	 	}
 	 }
}





function getRandomColor() {
 	var letters = '0123456789ABCDEF';
 	var color = '#';
 	for (var k = 0; k < 6; k++) {
 		color += letters[Math.floor(Math.random() * 16)];
 	}
 	return color;
 }

$(function() {
  loadKnob();
});

function processData() {
	projStrength = 360 / targetlist.length;
	for (i = 0; i < targetlist.length+1; i++) {
		ang[i] = projStrength *i +45;
		col[i] = getRandomColor();
	} 
}



var langDeg;

 $("#knob").mousedown(function () {
 	rotating = true;
	$(document).on("mousemove", function (e){degFromMouse(e);});
	$('#protector').css({'display': 'block'}); 
	
 });

 $(document).mouseup(function () {
	 //if(notmobile == true){ //checking if mobile device or not?
 		rotating = (rotating) ? false : rotating;
	 	$(document).off("mousemove");
	 $('#experienceContainer').css({'z-index': '1'});
	 	$('#protector').css({'display': 'none'}); 

	 //}
 });

function degFromMouse(e){
	var mPos = {
 		x: e.pageX - elPos.x,
 		y: e.pageY - elPos.y
 	};
 	var getAtan = Math.atan2(mPos.x - rad, mPos.y - rad);
 	projDeg = -getAtan / (Math.PI / 180) + 225; //from 45 to 405deg
	
	if (rotating) {
		knobRotate();
	}
}

function knobRotate(){
	if(block == false){
		updateProj(0);
		block = true;
	}
	//normalize projDeg
	if(projDeg >= 360){
		projDeg = projDeg-360;
	}else if(projDeg < 0){
		projDeg = projDeg+360;
	}
 		$('#outerknob').css({transform: 'rotate(' + projDeg + 'deg)'});
		
 		for (i = 0; i < targetlist.length+1; i++) { //OUTER SELECTOR 
			
 			if (projDeg >= ang[i] && projDeg < ang[i + 1] && i != currentProj) { //selected project
				$('#info1').text(i);
 				updateProj(i);
 				currentProj = i;
 			}
 		};
		//$('#info1').text(innerDeg);
		/*for (j = 0; j < proj[currentProj].langLength-1; j++) { //INNER SELECTOR 
 			if (innerDeg >= lang[j].angle && innerDeg < lang[j + 1].angle && j != currentLang) { //selected lang
 				updateLang(j);
 				currentLang = j;
 			}
 		};*/
}
 function updateProj(i) { //OUTER-COMPASS 
	
	 grabber(i);
	 secondLength = 1000;
	 innerDeg = 0;
	 $('#door, #personality, #personalityContainer, #nameContainer, #name').css({'display': 'none'});
 	//INIT LANGUAGES
 	langStrength = 360 / 2;
	  
 	for (j = 0; j < targetlist[i].langLength; j++) {
 		lang[j] = {
 			angle: langStrength * j,
 			color: getRandomColor()
 		};
		lang[0].color = proj[i].color;
 	};
 }



