var array_of_questions_unformated;
var array_of_questions = new Array;
var array_chosen_questions = new Array;
var chosen_numbers = new Array();
var answered_questions;
function generate_questions(number_of_questions, page_is_refreshed)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'questions/questions_'+Lang+'.txt', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onload = function() {
    if (xhr.status === 200) {
        array_of_questions_unformated = xhr.response.split('//');
        formate_questions();
        choose_questions(number_of_questions, page_is_refreshed);
        display_questions();
        rewrite_answers();
    } else {
        console.log('Error questions read');
    }
    };
}

function choose_questions(number, page_is_refreshed)
{
    if (!page_is_refreshed)
    {
        while (array_chosen_questions.length < number)
        {
            let question = GRI(array_of_questions.length);
            if (!chosen_numbers.includes(question))
            {
                array_chosen_questions.push(array_of_questions[question]);
                chosen_numbers.push(question);
            }
        }
        answered_questions = new Array(chosen_numbers.length).fill(0);
        sessionStorage.setItem("chosen_questions", chosen_numbers);
    }
    else
    {
        chosen_numbers = sessionStorage.getItem("chosen_questions").split(',');
        answered_questions = new Array(chosen_numbers.length).fill(0);
        for (let i = 0; i < number; i++)
        {
            array_chosen_questions.push(array_of_questions[chosen_numbers[i]]);
        }
    }
}

function formate_question(question_unformated)
{
    let question_formated = {question:"", true_false:"", answer_true:"", answer_false:""};
    question_formated.question = question_unformated[0];
    question_formated.true_false = parseInt(question_unformated[1]);
    question_formated.answer_true = question_unformated[2];
    question_formated.answer_false = question_unformated[3];
    return question_formated;
}

function formate_questions()
{
    let question;
    for (let i = 0; i < array_of_questions_unformated.length-1; i++)
    {
        question = array_of_questions_unformated[i].split('/');
        question = formate_question(question);
        array_of_questions[i] = question;
    }
}

function display_questions()
{
    let question_div;
    let question_text;
    let question_buttons;
    let question_true_button;
    let question_false_button;
    let question_answer;

    for (let i=0; i<array_chosen_questions.length; i++)
    {
        question_div = document.createElement("div");
        question_div.id = "question_div_"+(i+1);

        question_text = document.createElement("p");
        question_text.id = "question_text_"+(i+1);
        question_div.appendChild(question_text);
        
        question_buttons = document.createElement("div");
        question_buttons.className = "question_buttons";
            question_true_button = document.createElement("button");
            question_true_button.className = "true_question_button";
            question_true_button.id = "question_true_button_"+(i+1);
            question_true_button.addEventListener('click', function(){answer(this.id.substring(this.id.lastIndexOf("_")+1)-1, 2)});
            question_buttons.appendChild(question_true_button);

            question_false_button = document.createElement("button");
            question_false_button.className = "false_question_button";
            question_false_button.id = "question_false_button_"+(i+1);
            question_false_button.addEventListener('click', function(){answer(this.id.substring(this.id.lastIndexOf("_")+1)-1, 1)});
            question_buttons.appendChild(question_false_button);
        question_div.appendChild(question_buttons);

        question_answer = document.createElement("p");
        question_answer.className = "question_answer";
        question_answer.id = "question_answer_"+(i+1);
        question_div.appendChild(question_answer);
        question_div.className = "question";
        const main_div = document.getElementById("questions");
        main_div.appendChild(question_div);
        langload();
    }
}


function rewrite_questions()
{
    for (let i = 0; i < chosen_numbers.length; i++)
    {
        array_chosen_questions[i] = array_of_questions[chosen_numbers[i]];
        document.getElementById("question_text_"+(i+1)).innerHTML = array_chosen_questions[i].question;
    }
    interface_load();
}

function rewrite_answers()
{
    let answered_questions_temp;
    if (sessionStorage.getItem("answered_questions"))
    {
        answered_questions_temp = sessionStorage.getItem("answered_questions").split(",");
        sessionStorage.removeItem("answered_questions");
    }
    else
    {
        answered_questions_temp = answered_questions;
    }
    for (let i = 0; i < answered_questions_temp.length; i++)
    {
        switch (answered_questions_temp[i])
        {
            case '1':
            {
                answer(i, 1);
                break;
            }
            case '2':
            {
                answer(i, 2);
                break;
            }
            case '0':
            {
                break;
            }
        }
    }
}