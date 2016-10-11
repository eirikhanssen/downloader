	function download(filename, text) {
	  var element = document.createElement('a');
	  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	  element.setAttribute('download', filename);
	  element.style.display = 'none';
	  document.body.appendChild(element);
	  element.click();
	  document.body.removeChild(element);
	}

var submitBtn = document.querySelector('#submit');
	submitBtn.addEventListener('click', function(event){
		var dataForm = event.target.parentNode;
		//download(dataForm['name'].value, dataForm['text'].value);

		var xmlTree = '<root><doi id="wee">123/32423:3324</doi></root>';
		//download(dataForm['name'].value, xmlTree);

		var root = document.createElement('root');
		root.id="testing101";
		var child01 = document.createElement('child');
		child01.setAttribute('href', 'http://www.hfw.no/child01');
		root.appendChild(child01);
		var child02 = document.createElement('child');
		child02.setAttribute('href', 'http://www.hfw.no/child02');
		child02.innerHTML = dataForm['text'].value;
		var container = document.createElement('container');
		root.appendChild(child02);
		container.appendChild(root);
		download(dataForm['name'].value, container.innerHTML);
}, false);
