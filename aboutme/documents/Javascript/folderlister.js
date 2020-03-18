var destination = [];var filenames = [];var entities = [];var lines;var filepaths = []; var parentpath = []; var knobname; var nameofitself;
var dir;
var tempdir;
function loadfolder(d){
	destination = [];
	tempdir = d;
	dir = d.replace("?f", "/").replace("?in", "");
	
	//alert(dir);
var $div = $('<div>');
$div.load(dir, function(responseTxt, statusTxt, xhr){
   if(statusTxt == "success")
		lines = responseTxt.split("\n");
		loadlistitem(0);
		parentpath = lines[0].split(" ")[1].split("/"); //get parentpath with the location of current folder
		if(tempdir.indexOf("?f") >= 0){ //check if destination is a folder without knob
			knobname = dir.replace("%20", " ");
		}else{
			knobname = parentpath[parentpath.length-2]; //get knob name by taking last folder in the parentpath
		}
		
		document.title= "◯. " + knobname; //apply knob name to title
		$('#id').text(knobname); //apply knob name to #id
    });
   if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
	}



function loadlistitem(i){
	if(i<lines.length-3){ //parse folder reading
		filenames[i] = lines[i+2].split(" ")[1]; //get filename
		filepaths[i] = dir+filenames[i];
		entities[i] = lines[i+2].split(" ")[4]; //get type
		nameofitself = window.location.pathname.split("/").pop();
		if(entities[i] == "DIRECTORY"){ //check if type = folder
			$.ajax({ //check if knob exist inside folder
				url:filepaths[i]+"/"+nameofitself,
				dataType:'html',
				success: function(){ //if knob exist, insert knob link
					
						destination[i] = filepaths[i]+"/"+nameofitself;
					
						loadlistitem(i=i+1); //replay function with next item
					},
				error: function(){ //if no knob, insert direct path and indicate it's a folder without knob for loader.js
					//alert(filepaths[i]+'/knob.html');
						destination[i] = filepaths[i]+"?f";
						loadlistitem(i=i+1);//replay function with next item
					}
			});
		}else{
			destination[i] = filepaths[i];
			loadlistitem(i=i+1);
		}//if type = else, insert direct path then replay function with next item
	}else{
		destination = jQuery.grep(destination, function(value) {
  			return value != "./"+nameofitself;
		});
		console.log(destination);
		  
		  loadKnob();}//reload knob once list is fully loaded
}
	
	