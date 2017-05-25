	
var data = [];

var nextButton = document.getElementsByClassName('afpage')[0];

	var a = document.getElementById('subcontent');
	var b = a.getElementsByClassName('a_topic');
	for(var i=0;i<b.length;i++){
		var single = {};
		var text = b[i].innerText;
		if(text.indexOf('改装')!=-1 ||
		 		text.indexOf('多少钱')!=-1){
			single['title'] = text;
			single['href'] = b[i].href;
			data.push(single);
		}
	}

