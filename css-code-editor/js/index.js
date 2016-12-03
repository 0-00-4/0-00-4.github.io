'use strict';

window.app = function (_) {

  var log = console.log.bind(console),
      messageElement = document.querySelector('#js-typewriter'),
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
