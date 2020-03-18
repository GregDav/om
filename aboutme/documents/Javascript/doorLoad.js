var knobdirectory = document.getElementsByTagName("script")[0].src.replace('Javascript/doorLoad.js', ''); //guess knob path from current script location
var earlyscripts = ["https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.js", knobdirectory+"Javascript/loader.js"];
var latescripts = [knobdirectory+"Javascript/innerknob.js", knobdirectory+"Javascript/outerknob.js"];
loadscripts(earlyscripts); //load head scripts
queueLoadScript(latescripts); //load body scripts

var doorhtml = document.documentElement.innerHTML;
var knobhtml;
var world;
var xmlhttp = new XMLHttpRequest();
var jsfullyloaded = false;
var destination;

//GET KNOB
xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
		if (xmlhttp.status == 200) {
			goparser(xmlhttp.responseText);
		} else if (xmlhttp.status == 400) {
			alert('There was an error 400');
		} else {
			console.log('xmlhttp.status : '+xmlhttp.status);
		}
	}
};
xmlhttp.open("GET", knobdirectory+'index.html', true); //open the knob
xmlhttp.send();


//MERGE and RUN KNOB
function goparser(markup) {
	
	world = markup.replace(/href="/gi, 'href="'+knobdirectory).replace(/src="/gi, 'src="'+knobdirectory); //update all paths for current location

	let parser = new DOMParser();
	let doc = parser.parseFromString(world, "text/html"); //get knob document
	
	////// LOAD BODY
	doc.getElementById("door").innerHTML = document.getElementById("door").innerHTML; //replace door
	doc.title = window.location.pathname.split("/").pop().replace(".html", ""); //create knob/door title from filename
	doc.getElementById("id").innerHTML = doc.title; //replace id
	var newbody = doc.getElementsByTagName("body")[0]; //initialize new body
	document.getElementsByTagName("body")[0].innerHTML = newbody.innerHTML; //load new body
	/*
	////// LOAD SCRIPTS
	var knobhead = doc.getElementsByTagName("head")[0];	

	document.getElementsByTagName("head")[0].innerHTML = doc.getElementsByTagName("head")[0].innerHTML; //load css
	
	var earlyscripts = knobhead.getElementsByTagName("script"); //init head scripts
	var latescripts = newbody.getElementsByTagName("script"); //init body scripts
	*/
	
	
}
function queueLoadScript(source){
	if(jsfullyloaded == true){
		loadscripts(source);		
	}else{
		setTimeout(function(){
		queueLoadScript(source);
		}, 10);
	}
}
function loadscripts(source){
	for (var i = 0; i < source.length; ++i) {
		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = source[i];
		document.getElementsByTagName("head")[0].appendChild(js);		
	}	
}








