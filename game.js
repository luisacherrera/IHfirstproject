'use strict';


function Game (mainSite) {

    var self = this;

    self.game = document.createElement('div');
    self.game.setAttribute('id', 'game');

    self.gameGrid = document.createElement('div');
    self.gameGrid.setAttribute('id', 'grid');
    self.game.appendChild(self.gameGrid);

    self.obstacle = document.createElement('div');
    self.obstacle.setAttribute('id', 'bump');
    self.obstacle.style.display = 'none';
    self.gameGrid.appendChild(self.obstacle);

    self.character = document.createElement('div');
    self.character.setAttribute('id', 'player');
    self.gameGrid.appendChild(self.character);

    function moveObstacle () {
    self.obstacle;
    self.pos = -75;
    self.id = setInterval(frame, 10);
    function frame () {
       
        self.pos++;
        self.obstacle.style.top = self.pos + 'px';

        if (self.pos > 0) {
            self.obstacle.style.display = 'block';
        }

        if (self.pos === 600) {
            self.obstacle.remove();
        }
        
    }

    }

    moveObstacle();

    self.characterLeft = 0;

    function moveCharacter(e) {
    if (e.keyCode==37) {
        self.characterLeft -= 100;
        self.character.style.left = self.characterLeft + 'px';
        if (self.characterLeft <=-10) {
            self.characterLeft +=100;
            self.character.style.left = self.characterLeft + 'px';
        }
    }
    
    if (e.keyCode==39) {
        self.characterLeft += 100;
        self.character.style.left = self.characterLeft + 'px';
        if (self.characterLeft >=310) {
            self.characterLeft -=100;
            self.character.style.left = self.characterLeft + 'px';
        }
    }
    }

    document.onkeydown = moveCharacter;

    mainSite.appendChild(self.game);

}

Game.prototype.destroy = function () {
    
    var self = this;

    self.game.remove();

}