var txtpath = 'destinations.txt';
var destination = [];
			$.ajax({ //check if knob exist inside folder
				url:txtpath,
				dataType:'text',
				success: function(data){ //if knob exist, insert knob link
					var words = [];
					words = data.split(/[\s,]+/);
					for(i = 0; i<words.length; i++){
						
						if(words[i].indexOf("http") >=0){
							
							destination.push(words[i]);
						}
						
					}
					console.log(destination);
					loadKnob();
					},
				error: function(){ //if no knob, insert direct path and indicate it's a folder without knob for loader.js

					}
			});

	