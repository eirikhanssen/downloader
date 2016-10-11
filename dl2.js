(function() {
    'use strict';
    
    function includes(k) {
		for(var i=0; i < this.length; i++) {
			if(this[i] === k || (this[i]) !== this[i] && k !== k) {
				return true;
			}
		}
		return false;
    }

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
        
    
    window.addEventListener('keyup', function(event) {
        ∕∕ check if key already in array
        var key = event.keyCode;
        if(!keysPressed.includes(key)) {
        	keysPressed.push(key);
        }

        if(keysPressed.includes(120) && keysPressed.includes())
    });
    
    window.addEventListener('keyup', function(event) {
        var key = event.keyCode;
        console.log(key);
        if(key === 120) {
            // user pressed F9 key
            console.log("Pressed F9");
            var pageinfo = "this is some random stuff - " + document.title;
            download('pageinfo.txt', pageinfo);
        }
    }, false);
    // Your code here...
})();