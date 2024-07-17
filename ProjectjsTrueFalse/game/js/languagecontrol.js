var Lang = "by";
var language_array;
window.onload=function(){
	Lang = window.location.href.split('=')[1];
	//lang_change();
	document.getElementById("lang_change").addEventListener('click', function(){
		langchange();
  	});
};

function change_question_language()
{
    switch(Lang){case 'by':{Lang='ru'; break;}case 'ru': {Lang = 'by'; break;}};
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'questions/questions_'+Lang+'.txt', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onload = function() {
    if (xhr.status === 200) {
        array_of_questions_unformated = xhr.response.split('//');
        formate_questions();
        rewrite_chosen_questions();
        rewrite_questions();
    } else {
        console.log('Error questions read');
    }
    };
}

function lang_change()
	{
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'language_start_settings/interface_start_'+Lang+'.txt', true);
		console.log('language_start_settings/interface_'+Lang+'.txt');
		xhr.responseType = 'text';
		xhr.send();
		xhr.onload = function() {
		if (xhr.status === 200) {
			language_array = xhr.response.split('/');
			console.log(language_array);
			console.log(Lang);
		} else {
			console.log('Error language read');
		}
		};
		
}