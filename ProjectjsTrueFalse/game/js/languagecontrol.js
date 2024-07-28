var Lang = "by";
var language_array;
var t = 0;
function question_language_load()
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'questions/questions_'+Lang+'.txt', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onload = function() {
    if (xhr.status === 200) {
        array_of_questions_unformated = xhr.response.split('//');
        formate_questions();
        rewrite_questions();
    } else {
        console.log('Error questions read');
    }
    };
}

function langload()
{
	question_language_load();
	interface_load();
}
function interface_load()
	{
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'language_interface/interface_'+Lang+'.txt', true);
		xhr.responseType = 'text';
		xhr.send();
		xhr.onload = function() {
		if (xhr.status === 200) {
			language_array = xhr.response.split('/');
			t = 1;
			document.getElementById("html_lang").lang = Lang;
			document.getElementById("title").innerHTML = language_array[0];
			document.getElementById("lang_change").innerHTML = language_array[1];
			document.getElementById("title_body").innerHTML = language_array[2];
			let true_buttons = document.getElementsByClassName("true_question_button");
			let false_buttons = document.getElementsByClassName("false_question_button");
			for (let i = 0; i < true_buttons.length; i++)
			{
				true_buttons[i].innerHTML = language_array[3];
				false_buttons[i].innerHTML = language_array[4];
			}
			if (answered_questions_number != quest_number)
				document.getElementById("restart_button").innerHTML = language_array[5];
			else
				{
					document.getElementById("restart_button").innerHTML = language_array[6] + correct_answers +
					language_array[7] + quest_number + language_array[8];
					document.getElementById("restart_button").disabled = false;
				}
		} else {
			console.log('Error language read');
		}
		};
		
}