window.onload=function(){
	document.getElementById("StartButton").addEventListener('click', function(){
  		window.location.href = window.location.href+"game/game.html?lang="+Lang;
	});
	document.getElementById("lang_change").addEventListener('click', function(){
		langchange();
  	});
}
