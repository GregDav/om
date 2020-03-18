var doorslist = ["https://images.unsplash.com/photo-1552819401-700b5e342b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1503898362-59e068e7f9d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1544641724-73f0d1bee38b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1550684393-8e0b1468ca57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1546728682-0b16cf85b8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1541112455343-efc2c954558f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1541737899390-911b9bbf88a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1558827052-620cb6371c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1513492503952-08111373606b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1550697318-929498858774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1550494299-b85ce6aad3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1542566182-6b67a8c38838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", 'https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', "https://images.unsplash.com/photo-1496060875531-64e305199ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1508351017729-499fb1825b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", 'https://images.unsplash.com/photo-1508247687564-2289326346a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1506704183731-613f9a3a935d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1503075131240-fe4b3a7fa473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1522032742099-c80d5fdf1d8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1517111109658-0780925e6178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1556917396-a453fc142e6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1514910033344-c126cc685cf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1508404530815-6625db882a72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1445907187532-485d1578cf52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1484348968709-f5a59722ac11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1579355570788-50dd80a6b48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1564256392189-ff5aa21dca4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1573680202344-23b64154f5d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1563849172142-61791daca2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1561519113-6e2e3f56f1d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1574606364076-2be0a191b45a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1554048282-cb549bab17e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1556907162-37f5a94174bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1544500089-84ffa8e50fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1560323867-ed53d0ad1530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1545988676-4d37e28c78d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'];
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
	
	if(typeof tempdir == 'undefined'){ //if tempdir don't exist
		var tempdir = []; //create a temporary one so the scritp can keep running
	}
	if(typeof knobname == 'undefined'){
		$('#id').text(document.title);
	}
	
	 if($("#door").html().replace(/(\r\n|\n|\r)/gi,"").replace(/ /gi,"").length == 0){//check if there is anything in the door (after removing white spaces and line breaks everywhere)
		 	//install a "transparent" door if no custom door
			 $("#door").html("<iframe frameborder='0' src='./' style='height:100%; width:100%; position: absolute;'></iframe>");
	 }
	 if($("#randomDoor").length){//build door randomizer
		 var pickadoor = doorslist[Math.floor(Math.random() * doorslist.length)];
		 $("#door").css({'backgroundImage':"url("+pickadoor+")", backgroundSize:"100000% 100%", backgroundPosition:"left", opacity:0});
		 $("#randomDoor").css({'backgroundImage':"url("+pickadoor+")"});
		 setTimeout(function(){
			 $("#door").css({"-ms-transition": "opacity .5s ease-in-out", "-moz-transition": "opacity .5s ease-in-out", "-o-transition": "opacity .5s ease-in-out", "-webkit-transition": "opacity .5s ease-in-out"});
			  $("#door").css({opacity:1});
		 },1000);
		 //$("#randomDoor").css({'backgroundColor':getRandomColor()});
	 }
	 if ( window.location !== window.parent.location) { //inside an iframe hide knob
		$('#knob').css({display: '', transform: 'scale(.5)', opacity:.7});
		$('#id').css({transform: 'scale(.8)', opacity:0});
	 } else { //in its original location do load knob 
		if (window.location.href.indexOf("?in") >= 0 || tempdir.indexOf("?f") >= 0){ //open the door through URL injection
			updateProj(0);
		}
		 
		if(destination.length==1 && allowKnobLoad == true){// if only one destination & if not from pushback, go through directly
			//window.location.replace(destination[0]);
		}else{ //if multiple destination load knob
			$('#knob').css({display: '', transform: 'scale(1)', opacity:1}); 
			$('#id').css({'font-size': '12px', margin:'-18vh 0 0 1vh', 'letter-spacing':'10px', 'line-height':'20px', 'width':'100%', 'display':'block', transform: 'scale(1)', opacity:1}); 
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
					$('#through').css({'display':'none'});	//wait a bit to avoid double through
					setTimeout(function(){
						$('#through').css({'display':'block'});		
					}, 500);
					if(dir !== "./"){//if inside folder
						//alert(gotoURL.split("/")[gotoURL.split("/").length-3]+"/");
						var previouspath = gotoURL.split("/")[gotoURL.split("/").length-3]+"/";
						if(previouspath == "undefined/"){
							previouspath = "./";
						}
						loadfolder(previouspath);
					}else{//if inside object
						window.history.back();
						
					}
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
	 
	 for (i = 0; i < destination.length; i++) {
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
	projStrength = 360 / destination.length;
	for (i = 0; i < destination.length+1; i++) {
		ang[i] = projStrength *i;
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
	 if($('#door').css('display') == 'none'){
	 	$('#experienceContainer').css({'z-index': '1'}); //only if through the door
	}
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
		
 		for (i = 0; i < destination.length+1; i++) { //OUTER SELECTOR 
 			if (projDeg >= ang[i] && projDeg < ang[i + 1] && i != currentProj) { //selected project
				console.log(destination[i]);
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
	  
 	for (j = 0; j < destination[i].langLength; j++) {
 		lang[j] = {
 			angle: langStrength * j,
 			color: getRandomColor()
 		};
		lang[0].color = proj[i].color;
 	};
 }
