/*
    get_links.js

    MediaWiki API Demos
    Demo of `Links` module: Get all links on the given page(s)

    MIT License
*/
var categories = [];
var destination = [];


var url = "https://en.wikipedia.org/w/api.php"; 
url = url + "?origin=*";


$(window).ready(function () {
	getcategory();
});
function getcategory(){
	destination = [];
var categoryurl = url;
var paramscategory = {
    action: "query",
    format: "json",
    generator: "random",
	grnlimit: "1",
	grnnamespace: "14"
};
Object.keys(paramscategory).forEach(function(key){categoryurl += "&" + key + "=" + paramscategory[key];});
var selectCategory;
fetch(categoryurl)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
		for (var p in pages) {
			selectCategory = pages[p].title;
			getpages(selectCategory);
        } 
		$("#name").html('<p>'+String(selectCategory)+'</p>');

    })
    .catch(function(error){console.log(error);});

}




function getpages(cat){
	var pagesurl = url;
var paramspages = {
    action: "query",
    format: "json",
    list: "categorymembers",
	cmnamespace: "0",
	cmlimit: "max",
	cmtitle: cat
};
Object.keys(paramspages).forEach(function(key){pagesurl += "&" + key + "=" + paramspages[key];});
var selectpages = [];
fetch(pagesurl)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.categorymembers;
		for (var p in pages) {
			selectpages[p] = pages[p].title;
			getlinks(selectpages[p]);
        } 
	$("#personality").html('<p>'+String(selectpages).split(',').join(', ')+'</p>');
    })
    .catch(function(error){console.log(error);});
}





function getlinks(page){
	var linksurl = url;
var paramslinks = {
    action: "query",
    format: "json",
    titles: page,
	prop: "extlinks"
};
Object.keys(paramslinks).forEach(function(key){linksurl += "&" + key + "=" + paramslinks[key];});
var selectlinks = [];

fetch(linksurl)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
		for (var p in pages) {
			for (var e in pages[p].extlinks) {
                selectlinks[e] = Object.values(pages[p].extlinks[e])[0];	
            }	
        } 
		destination = destination.concat(selectlinks);
	alert(destination);
			$('#handlein').css({'width': 1+destination.length/100+'vh', 'height' :1+destination.length/100+'vh'}); 
	console.log(1+target.length/100+'vh');
		$("#id").html('<p>'+String(destination)+'</p>');
    })
    .catch(function(error){console.log(error);});
}







/*

var params = {
    action: "query",
    format: "json",
    list: "random",
	rnlimit: "1",
	rnnamespace: "14"
};

Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.allpages;
        for (var p in pages) {
			destination[p] = pages[p].title;
        }
    })
    .catch(function(error){console.log(error);});*/
