 var rotating = false;
 var outerknob = $('#outerknob');
 var knob = $('#knob');
 var rad = knob.width() / 2;
 var elOfs = knob.offset();
 var elPos = {
 	x: elOfs.left,
 	y: elOfs.top
 }
 
 var i;
 var handle = [];
 var target = [];
var ang = [];
var col = [];
 var projStrength;
 var projDeg;
 var toDeg;
 var currentProj;

 var j;
 var lang = [];
 var langStrength;
 var currentLang;
var datetime;

perpetualtrigger();
function perpetualtrigger(){
	var currentdate = new Date();
	datetime = 
                currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
		document.title = docTitle + " ." + datetime;
    setTimeout( perpetualtrigger, 1000);
}







 function getRandomColor() {
 	var letters = '0123456789ABCDEF';
 	var color = '#';
 	for (var k = 0; k < 6; k++) {
 		color += letters[Math.floor(Math.random() * 16)];
 	}
 	return color;
 }
 //var newHash;


 $(window).ready(function () {
    $.ajax({
        type: "GET",
        url: "data.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });

	
	 
	 document.getElementById("audioRadio").volume = 0;
 	// newHash = window.location.hash.substring(1); //not working
	  
	  if ( window.location !== window.parent.location ) { //inside an iframe do not load knob
		$('#knob').css({display: 'none'}); 
		$('#personality').css({display: 'block'});
		$('#personality').css({opacity: '1'});
	 } else { //in its original location do load knob
		$('#knob').css({display: 'inline-block', transform: 'scale(1)', opacity:1}); 
		$('#personality').css({opacity: '0'});
		setTimeout(function(){ //bottom go top
			rad = knob.width() / 2;
			elOfs = knob.offset();
 			elPos = {
 				x: elOfs.left,
 				y: elOfs.top
 			}
			$('#handleout, #handlein').css({opacity:1});
			$('#personality').css({display: 'none'});
		}, 1000);
		 
	 }
	 
	 

 });

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length-1; i++) {
		target[i] = "//www."+allTextLines[i];
		
    }
	projStrength = 360 / target.length;
	for (i = 0; i < target.length + 1; i++) {
		ang[i] = projStrength *i +45;
		col[i] = getRandomColor();
		handle[i]=parseInt(datetime)+i; 	}
	
	for (i = 0; i < target.length; i++) {
		 if(window.location.hash.substring(1) == handle[i]) {
			grabber(handle[i], target[i]);
	 	}
 	 }
    
}



var langDeg;
var encoder = document.getElementById('encoder');


 $(document).mousedown(function () {
 	rotating = true;
	$('#iFrameInput').css({'z-index': '0'}); 
 });

 $(document).mouseup(function (a) {
	 //if(notmobile == true){ //checking if mobile device or not?
 		rotating = (rotating) ? false : rotating;
		$('#iFrameInput').css({'z-index': '1'});
	 //}
 });
 $(document).mousemove(function (e) {
 	var mPos = {
 		x: e.pageX - elPos.x,
 		y: e.pageY - elPos.y
 	};
 	var getAtan = Math.atan2(mPos.x - rad, mPos.y - rad);
 	projDeg = -getAtan / (Math.PI / 180) + 225; //from 45 to 405deg
	 
	 

 	if (rotating) {
		
 		$('#outerknob').css({transform: 'rotate(' + projDeg + 'deg)'});
		$('#instastream').css({backgroundSize: langDeg +'%'});
		
		
 		for (i = 0; i < target.length; i++) { //PROJECT SELECTOR 
 			if (projDeg >= ang[i] && projDeg < ang[i + 1] && i != currentProj) { //selected project
				
 				updateProj(i);
 				currentProj = i;
 			}
 		};
		//$('#info1').text(langDeg);
		
		
 	}
 });


 function updateProj(i) { //OUTER-COMPASS
	 
	 if(handle[i+1] == undefined){
		handle[i+1] = datetime;
	}
	
 	$('#content').css({'background-color': col[i+1]});
	$('#iFrameInput').css({'backgroundImage':'url(thumb/'+(i+1)+'.jpg)'});
	
	$("#through").attr("href", target[i+1]);
	if(buffer==false){
		grabber(handle[i + 1], target[i + 1]);
		buffer=true;
	} 
 	
	 
 	//INIT LANGUAGES
 	langStrength = 360 / 2;
	  
 	for (j = 0; j < handle[i].langLength; j++) {
 		lang[j] = {
 			angle: langStrength * j,
 			color: getRandomColor()
 		};
		lang[0].color = proj[i].color;
 	};
	 setTimeout(function(){ 
		 
	 if(i==0){//LOAD INVITATION
	 }else if(i==1){ // MASLO
	 }else if(i==2){   //SECRETMAP
	 }else if(i==3){ //DREAM JOURNAL
	 }else if(i==4){ //BIO
	 }else if(i==5){ //WIKI
	 }else if(i==6){ //MEME
	 }else if(i==7){ //itself
	 }else{	
	 }
		}, 300); 
 }

 function updateLang(j) {  //INNER-COMPASS
	 //$('#knob').css({'background-color': lang[j].color});	
	 //$('#header').text(j);
	 if(currentProj==4 && $('#the-canvas').length){
		queueRenderPage(j+1); 
	 }
 }
