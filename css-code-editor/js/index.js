'use strict';

window.app = function (_) {

  var log = console.log.bind(console),
      messageElement = document.querySelector('.js-typewriter #rnd'),
      text = messageElement.innerText.trim();

  var words = text.split(' ');

  var work = [];

  words.forEach(function (word) {
    var splitWord = word.split('').map(function (char, index) {
      return '<i>' + char + '</i>';
    }).join('');
    work.push(splitWord);
  });

  var formattedWords = work.map(function (word, index) {
    return '<span>' + word + '</span>';
  }).join(' ');

  messageElement.innerHTML = formattedWords;
  messageElement.classList.add('animate');

  return {
    replay: function replay(event) {
      messageElement.classList.remove('animate');
      messageElement.offsetHeight; // force reflow
      setTimeout(function (_) {
        messageElement.classList.add('animate');
      });
    }
  };
}();



$(document).ready(documentReady);

function documentReady()
{

	var characterCollection 	= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];

	var currentText 			= $("#rnd").text();

	var currentTextCollection 	= new Array();

	var characterCount			= 0;

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

		$("#rnd ").text(getRandomText());

	}

}












