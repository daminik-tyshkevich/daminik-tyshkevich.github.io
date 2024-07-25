var quest_number = 5;
window.onload=function(){
    generate_questions(quest_number);
    Lang = window.location.href.split('=')[1];
    langchange();
    document.getElementById("lang_change").addEventListener('click', function(){
          switch(Lang){case 'by':{Lang='ru'; break;}case 'ru': {Lang = 'by'; break;}};
      langchange();
      });
}
function GRI(max)
{
  return Math.floor(Math.random() * max);
}

function answer(question_number, pressed_key)
{
  if ((pressed_key==1) && (answered_questions[question_number]==0))
    {
      document.getElementById("question_answer_"+(question_number+1)).innerHTML=array_chosen_questions[question_number].answer_true;
      answered_questions[question_number] = 1;
    }
    else if (answered_questions[question_number]==0)
    {
      document.getElementById("question_answer_"+(question_number+1)).innerHTML=array_chosen_questions[question_number].answer_false;
      answered_questions[question_number] = 1;
    }
}
