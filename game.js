'use strict';


function Game (mainSite) {

    var self = this;

    // GAMEGRID

    self.game = document.createElement('div');
    self.game.setAttribute('id', 'game');

    self.gameGrid = document.createElement('div');
    self.gameGrid.setAttribute('id', 'grid');
    self.game.appendChild(self.gameGrid);

    var gameGrid = self.gameGrid;

    //PLAYER

    self.player = new Character(gameGrid);

    document.onkeydown = self.player.moveCharacter;

    //OBSTACLES

    self.obstacle = new Obstacle (gameGrid);

    self.obstacle.moveObstacle();

    // COLLISION BETWEEN PLAYER AND OBSTACLE

    // function check () {

    //     self.obstacleTop = parseInt(self.obstacle.style.top);
    //     self.obstacleHeight = parseInt(self.obstacle.clientHeight);
    //     self.obstacleWidth = parseInt(self.obstacle.clientWidth);
      
    //     self.playerTop = 530;
    //     self.playerWidth;
      
    //     if (self.obstacleTop+self.obstacleHeight > self.playerTop 
    //       && self.obstacleLeft+self.obstacleWidth > self.playerLeft 
    //       && self.obstacleLeft < self.playerLeft+self.playerWidth) {
    //         console.log('does this even works?');
    //     }

    // }

    // moveObstacle();

    mainSite.appendChild(self.game);

}

Game.prototype.destroy = function () {
    
    var self = this;

    self.game.remove();

}