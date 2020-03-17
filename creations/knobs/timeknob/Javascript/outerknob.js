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
 var projDeg;
 var toDeg;
 var currentProj = 0;

 var j;
 var lang = [];
 var langStrength;
 var currentLang;
var datetime;
var block = false;


perpetualtrigger();
function perpetualtrigger(){

    setTimeout( perpetualtrigger, 1000);
}

function loadKnob(){
	 if ( window.location !== window.parent.location ) { //inside an iframe do not load
		$('#knob').css({display: 'none'}); 
	 } else { //in its original location do load
		$('#knob').css({display: 'inline-block', transform: 'scale(1)', opacity:1}); 
		setTimeout(function(){ //bottom go top
			rad = knob.width() / 2;
			elOfs = knob.offset();
 			elPos = {
 				x: elOfs.left,
 				y: elOfs.top
 			}
			$('#handleout, #handlein').css({opacity:1});
		}, 1000);
		 
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


 $(window).ready(loadKnob());

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
	 if(block == false){
		 goInnerKnob();
		 updateProj(0);
		 block = true;
	 }
	$('#experienceContainer').css({'z-index': '0'}); 
 });

 $(document).mouseup(function (a) {
	 //if(notmobile == true){ //checking if mobile device or not?
 		rotating = (rotating) ? false : rotating;
		$('#experienceContainer').css({'z-index': '1'});
	 
	 //}
 });
 $(document).mousemove(function (e) {
 	var mPos = {
 		x: e.pageX - elPos.x,
 		y: e.pageY - elPos.y
 	};
 	var getAtan = Math.atan2(mPos.x - rad, mPos.y - rad);
 	projDeg = -getAtan / (Math.PI / 180) + 225; //from 45 to 405deg
	 
	 //normalize projDeg
	if(projDeg >= 360){
		projDeg = projDeg-360;
	}else if(projDeg < 0){
		projDeg = projDeg+360;
	}
 	if (rotating) {
 		$('#outerknob').css({transform: 'rotate(' + projDeg + 'deg)'});
		
 		for (i = 0; i < targetlist.length+1; i++) { //OUTER SELECTOR 
			
 			if (projDeg >= ang[i] && projDeg < ang[i + 1] && i != currentProj) { //selected project
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
 });


 function updateProj(i) { //OUTER-COMPASS 
	
	 grabber(i);
	 secondLength = 1000;
	 innerDeg = 0;
	 
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

 function updateLang(j) {  //INNER-COMPASS
	 //$('#knob').css({'background-color': lang[j].color});	
	 //$('#header').text(j);
	 if(currentProj==4 && $('#the-canvas').length){
		queueRenderPage(j+1); 
	 }
 }
