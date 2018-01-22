'use strict';

function main () {

  var mainSite = document.querySelector('#site');
 
  var stage;

  var game;

  // START

  var startElement;

  var startButton;

  var startGame = function () {
    destroyStart();
    buildGame();
  };

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

    mainSite.appendChild(startElement);

    startButton.addEventListener('click', startGame);

  } 

  function destroyStart () {

    startButton.removeEventListener('click', startGame);

    startElement.remove();

  }

  //GAME

  function buildGame () {
    stage = 'game';

    // game = new Game(mainSite);

    game = document.createElement('div');
    game.setAttribute('id', 'game');

    var gameGrid = document.createElement('div');
    gameGrid.setAttribute('id', 'grid');
    game.appendChild(gameGrid);

    var obstacle = document.createElement('div');
    obstacle.setAttribute('id', 'bump');
    gameGrid.appendChild(obstacle);

    var character = document.createElement('div');
    character.setAttribute('id', 'player');
    gameGrid.appendChild(character);

    function moveObstacle () {
      obstacle;
      var pos = -75;
      var id = setInterval(frame, 10);
      function frame () {
        if (pos === 600) {
          obstacle.remove();
        } else {
          pos++;
          obstacle.style.top = pos + 'px';
        }
      }
    }

    moveObstacle();

    var characterLeft = 0;

    function moveCharacter(e) {
      if (e.keyCode==37) {
        characterLeft -= 100;
        character.style.left = characterLeft + 'px';
        if (characterLeft <=-10) {
          characterLeft +=100;
          character.style.left = characterLeft + 'px';
        }
      }
      
      if (e.keyCode==39) {
        characterLeft += 100;
        character.style.left = characterLeft + 'px';
        if (characterLeft >=310) {
          characterLeft -=100;
          character.style.left = characterLeft + 'px';
        }
      }
    }
  
    document.onkeydown = moveCharacter

    mainSite.appendChild(game);

    window.setTimeout(function () {
      destroyGame();
      buildGameOver();
    }, 10000);

  }

  function destroyGame () {

    game.remove();

  }

  //GAME OVER

  var gameOverElement;

  var playAgainButton;

  var startAgain = function () {

    destroyGameOver();
    buildGame();

  }

  function buildGameOver () {

    stage = 'gameover';

    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id', 'gameover');

    var imageOver = document.createElement('img');
    imageOver.setAttribute('src', 'images/game-over.png');
    gameOverElement.appendChild(imageOver);

    var actualScore = document.createElement('h2');
    actualScore.innerText = 'Your Score: ';
    gameOverElement.appendChild(actualScore);

    playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'PLAY AGAIN';
    gameOverElement.appendChild(playAgainButton);

    playAgainButton.addEventListener('click', startAgain);

    mainSite.appendChild(gameOverElement);

  }

  function destroyGameOver () {

    playAgainButton.removeEventListener('click', startAgain);
    
    gameOverElement.remove();

  }

  buildStart();
}

window.onload = main; 

