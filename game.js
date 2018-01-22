'use strict';

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