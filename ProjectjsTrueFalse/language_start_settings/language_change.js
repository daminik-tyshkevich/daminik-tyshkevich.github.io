var Lang = "by";
var language_array;
function langchange()
	{
		switch(Lang){case 'by':{Lang='ru'; break;}case 'ru': {Lang = 'by'; break;}};
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'language_start_settings/interface_start_'+Lang+'.txt', true);
		console.log('language_start_settings/interface_'+Lang+'.txt');
		xhr.responseType = 'text';
		xhr.send();
		xhr.onload = function() {
		if (xhr.status === 200) {
			language_array = xhr.response.split('/');
			console.log(language_array);
			document.getElementById("html_lang").lang = Lang;
			document.getElementById("title").innerHTML = language_array[0];
			document.getElementById("lang_change").innerHTML = language_array[1];
			document.getElementById("body_title").innerHTML = language_array[2];
			document.getElementById("description").innerHTML = language_array[3];
			document.getElementById("StartButton").innerHTML = language_array[4];
			console.log(Lang);
		} else {
			console.log('Error language read');
		}
		};
		
}
