// ==UserScript==
// @name         download some info from page
// @namespace    http://www.hfw.no/ns/downloader
// @version      0.1
// @description  get info and extract to txt file!
// @author       Eirik Hanssen
// @match        http://www.hioa.no/Om-HiOA/Senter-for-velferds-og-arbeidslivsforskning/NOVA/Publikasjonar/*
// @match        http://www.hioa.no/Om-HiOA/Senter-for-velferds-og-arbeidslivsforskning/AFI/Publikasjoner-AFI/*
// @grant        none
// ==/UserScript==

console.log('before init');

function init() {

    console.log("page info downloader");
    
    var keypressed = [];
    keypressed.includes = includes;
    
    function download(filename, text) {
	  var element = document.createElement('a');
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	  element.setAttribute('download', filename);
	  element.style.display = 'none';
	  document.body.appendChild(element);
	  element.click();
	  document.body.removeChild(element);
	}
    
    function includes(k) {
		for(var i=0; i < this.length; i++) {
			if(this[i] === k || (this[i]) !== this[i] && k !== k) {
				return true;
			}
		}
		return false;
    }

    function getData(){
        var title = document.title;
        var filename = "pageinfo.txt";
        var filecontents = title;
        download(filename,filecontents);
    }
    
    window.addEventListener('keyup', function(event) {
        var key = event.keyCode;
        
        if(key === 120 && keypressed.includes(16) && keypressed.includes(17)) {
            // user pressed ctrl + shift + F9
            getData();
        } else {
            console.log(keypressed);
        }
        
        // remove key from array
        if(keypressed.includes(key)){
            var index = keypressed.indexOf(key);
            keypressed.splice(index,1);
        }
    }, false);
    
    window.addEventListener('keydown', function(event) {
        var key = event.keyCode;
        
         // add key to array if it is not there... don't add duplicate keys
        if(!keypressed.includes(key)){
            keypressed.push(key);
        }
       
   }, false);

}

window.addEventListener('load', init, false);