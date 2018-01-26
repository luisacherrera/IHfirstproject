'use strict';

function main () {

  var mainSite = document.querySelector('#site');
 
  var stage;

  var game;

  // START

  var startElement;

  var startButton;

  function buildStart () {

    stage = 'startScreen'; 

    startElement = document.createElement('div');
    startElement.setAttribute('id', 'startscreen');

    var titleDiv = document.createElement('div');
    titleDiv.setAttribute('id', 'startscreen');
    titleDiv.setAttribute('class', 'title');
    startElement.appendChild(titleDiv);

    var titleImage = document.createElement('img');
    titleImage.setAttribute('src', 'images/test.png');
    titleDiv.appendChild(titleImage);

    startButton = document.createElement('button');
    startButton.innerText = 'START';
    startElement.appendChild(startButton);

    startButton.addEventListener('click', startGame);
    
    var bottomImage = document.createElement('div');
    bottomImage.setAttribute('id', 'falcon');
    startElement.appendChild(bottomImage);

    function moveFalcon () {
      bottomImage;
      var pos = 0;
      var id = setInterval(frame, 0);
      function frame () {
  
        pos++;
        bottomImage.style.left = pos + 'px';

        if (pos === 1200) {
          bottomImage.remove();
        }

      }
  
    }

    moveFalcon();

    mainSite.appendChild(startElement);

  } 

  function destroyStart () {

    startButton.removeEventListener('click', startGame);

    startElement.remove();

  }

  function startGame () {
    destroyStart();
    buildGame();
  };

  //GAME

  function buildGame () {
   
    stage = 'game';

    game = new Game(mainSite);

    game.onGameOver(function () {
      destroyGame();
      buildGameOver();
    });

  }

  function destroyGame () {

    game.destroy();

  }

  //GAME OVER

  var gameOverElement;

  var playAgainButton;

  function buildGameOver () {

    stage = 'gameover';

    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id', 'gameover');

    var imageOver = document.createElement('img');
    imageOver.setAttribute('src', 'images/game-over.png');
    imageOver.setAttribute('id', 'ended');
    gameOverElement.appendChild(imageOver);

    var endMessage = document.createElement('h2');
    endMessage.innerText = 'I HAD A BAD FEELING ABOUT THIS...';
    gameOverElement.appendChild(endMessage);

    playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'PLAY AGAIN';
    gameOverElement.appendChild(playAgainButton);

    var endMusic = document.createElement('audio');
    endMusic.setAttribute('src', 'audios/force-theme.mp3');
    endMusic.setAttribute('autoplay', 'true');
    gameOverElement.appendChild(endMusic);

    playAgainButton.addEventListener('click', startAgain);

    mainSite.appendChild(gameOverElement);

  }

  function destroyGameOver () {

    playAgainButton.removeEventListener('click', startAgain);
    
    gameOverElement.remove();

  }

  function startAgain () {

    destroyGameOver();
    buildGame();

  }

  buildStart();
}

window.onload = main; 

