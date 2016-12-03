/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/




/*
    Landed by Yasin Burak KALKAN
    Yasin Burak Kalkan | Front-End Developer
    www.yasinkalkan.com
*/

$(document).ready(documentReady);

function documentReady()
{

	var characterCollection 	= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];

	var currentText 			= $("#rnd #sp").text();

	var currentTextCollection 	= new Array();

	var characterCount			= 1;

	var characterSpeed			= 500;

	pushCurrentTextChrachters();

	function pushCurrentTextChrachters () {

		for(var i = 0; i < currentText.length; i++)
		{

			var currentCharacter = currentText.slice(i, i+1);

			currentTextCollection.push(currentCharacter);

		}

	}

	var characterCountIncreaseInterval = setInterval(characterCountIncrease, characterSpeed);

	function characterCountIncrease () {

		if (characterCount == currentTextCollection.length)
		{

			clearInterval(characterCountIncreaseInterval);

			clearInterval(setRandomTextInterval);

		}

		characterCount++;

	}

	function getRandomText () {

		var result = "";

		if(characterCount == 0)
		{

			for(var i = 0; i < currentTextCollection.length; i++)
			{

				var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

				result += randomCharacter;

			}

		}
		else
		{

			result = currentText.slice(0, characterCount);

			for(var i = 0; i < currentTextCollection.length - characterCount; i++)
			{

				var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

				result += randomCharacter;

			}

		}

		return result;

	}

	var setRandomTextInterval = setInterval(setRandomText, 50);

	function setRandomText () {

		console.log(getRandomText());

		$("#rnd #sp ").text(getRandomText());

	}

}
