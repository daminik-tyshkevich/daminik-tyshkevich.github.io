window.onload=function(){
    generate_questions(5);
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
