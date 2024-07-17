var Lang = "by";
var language_array;
window.onload=function(){
	Lang = window.location.href.split('=')[1];
	document.getElementById("lang_change").addEventListener('click', function(){
		langchange();
		console.log("//");
  	});
};

function change_question_language()
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'questions/questions_'+Lang+'.txt', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onload = function() {
    if (xhr.status === 200) {
        array_of_questions_unformated = xhr.response.split('//');
        formate_questions();
        rewrite_chosen_questions();
		console.log(array_chosen_questions);
        rewrite_questions();
		console.log("rewrite");
    } else {
        console.log('Error questions read');
    }
    };
}

function langchange()
	{
		switch(Lang){case 'by':{Lang='ru'; break;}case 'ru': {Lang = 'by'; break;}};
		change_question_language();
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
			document.getElementById("title_body").innerHTML = language_array[2];
			console.log(Lang);
		} else {
			console.log('Error language read');
		}
		};
		
}