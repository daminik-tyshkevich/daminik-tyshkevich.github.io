var quest_number = 5;
var answered_questions_number = 0;
var correct_answers = 0;
window.onload=function(){
  Lang = window.location.href.split('=')[1];
  if (!sessionStorage.getItem("chosen_questions"))
  {
    generate_questions(quest_number, 0);
    langload();
  }
  else
  {
    generate_questions(quest_number, 1);
    langload();
  }
  document.getElementById("lang_change").addEventListener('click', function(){
        switch(Lang){case 'by':{Lang='ru'; break;}case 'ru': {Lang = 'by'; break;}};
        sessionStorage.setItem("answered_questions", answered_questions);
        window.location.href=window.location.href.split('=')[0]+'='+Lang;
  });
  document.getElementById("restart_button").addEventListener('click', function(){
    sessionStorage.clear();
    window.location.href=window.location.href.split('=')[0]+'='+Lang;
});
}
function GRI(max)
{
  return Math.floor(Math.random() * max);
}

function answer(question_number, pressed_key)
{
  if ((answered_questions[question_number]==0))
  {
    if (pressed_key==2)
      {
        writing_by_letter(document.getElementById("question_answer_"+(question_number+1)), array_chosen_questions[question_number].answer_true);
        //document.getElementById("question_answer_"+(question_number+1)).innerHTML=array_chosen_questions[question_number].answer_true;
        answered_questions[question_number] = pressed_key;
        if(array_chosen_questions[question_number].true_false == (pressed_key-1))
        {
          document.getElementById("question_div_"+(question_number+1)).style.borderColor = "green";
          correct_answers++;
        }
        else
        {
          document.getElementById("question_div_"+(question_number+1)).style.borderColor = "red";
        }
        restart_button();
      }
      else
      {
        writing_by_letter(document.getElementById("question_answer_"+(question_number+1)), array_chosen_questions[question_number].answer_false);
        //document.getElementById("question_answer_"+(question_number+1)).innerHTML=array_chosen_questions[question_number].answer_false;
        answered_questions[question_number] = pressed_key;
        if(array_chosen_questions[question_number].true_false == (pressed_key-1))
        {
          document.getElementById("question_div_"+(question_number+1)).style.borderColor = "green";
          correct_answers++;
        }
        else
        {
          document.getElementById("question_div_"+(question_number+1)).style.borderColor = "red";
        }
        restart_button();
      }
  }
}
function restart_button()
{
  answered_questions_number++;
  if ((answered_questions_number == quest_number) && (t == 1))
  {
    document.getElementById("restart_button").disabled = false;
    document.getElementById("restart_button").innerHTML = language_array[6] + correct_answers +
				language_array[7] + quest_number + language_array[8];
  }
}
function writing_by_letter(object, text)
{
  var index = 0;
  var Writing_interval = setInterval(function() {
    object.innerHTML += text.charAt(index);
    index++;
    object.style.height = object.scrollHeight + 'px';
    if(index == text.length) {
        clearInterval(Writing_interval);
    }
  }, 20);
}
