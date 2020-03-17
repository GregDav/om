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

	 
	 document.getElementById("audioRadio").volume = 0;
 	// newHash = window.location.hash.substring(1); //not working
	 processData();
	 
	 for (i = 0; i < target.length; i++) {
		 if(window.location.hash.substring(1) == handle[i]) {
			//grabber(target[i]);
	 	}
 	 }

 });

function processData() {
    target = targetlist;
	
	projStrength = 360 / target.length;
	for (i = 0; i < target.length + 1; i++) {
		ang[i] = projStrength *i +45;
		col[i] = getRandomColor();
		handle[i]=parseInt(datetime)+i; 	}
 
}



var langDeg;
var encoder = document.getElementById('encoder');


 $(document).mousedown(function () {
 	rotating = true;
	 
	$('#iFrameInput1').css({'z-index': '0'}); 
 });

 $(document).mouseup(function (a) {
	 //if(notmobile == true){ //checking if mobile device or not?
 		rotating = (rotating) ? false : rotating;
		$('#iFrameInput1').css({'z-index': '1'});
	 
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
		processData();
 		$('#outerknob').css({transform: 'rotate(' + projDeg + 'deg)'});
		
		
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
	//$('#iFrameInput1').css({'backgroundImage':'url(thumb/'+(i+1)+'.jpg)'});
	 
	getcategory();
	 
	$("#through").attr("href", target[i+1]);
	if(buffer==false){
		
		//grabber(handle[i + 1], target[i + 1]);
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
