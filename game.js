'use strict';


function Game (mainSite) {


    var self = this;

    self.onEnded

    // GAMEGRID

    self.game = document.createElement('div');
    self.game.setAttribute('id', 'game');

    self.gameGrid = document.createElement('div');
    self.gameGrid.setAttribute('id', 'grid');
    self.game.appendChild(self.gameGrid);

    var gameGrid = self.gameGrid;

    // SCORE


    
    // PLAYER

    self.player = new Player(gameGrid);

    self.playerTop = self.player.getPlayerTop();
    self.playerWidth = self.player.getPlayerWidth();
    document.onkeydown = self.player.movePlayer.bind(self.player);


    // OBSTACLES

    self.obstacle = new Obstacle(gameGrid);

    self.updateObstacle();

    // function duplicate () {
    //     self.obstacle = self.original.cloneNode(true);
    //     self.original.parentNode.appendChild(self.obstacle);
        
    //     self.moveObstacle();

    //     self.changeLeftObstacle();
    // }

    // setInterval (duplicate, 1000);

    mainSite.appendChild(self.game);

}

Game.prototype.updateObstacle = function () {

    var self = this;

    self.newInterval = setInterval(function () {
        self.obstacle.moveObstacle();
        self.obstacle.changeObstacleLeft();
        self.check();
    }, 10)

}

Game.prototype.check = function () {

    var self = this;

    var notOnTop = self.obstacle.getObstacleTop()+self.obstacle.getObstacleHeight() > self.player.getPlayerTop();
    var notOnLeft = self.obstacle.getObstacleLeft()+self.obstacle.getObstacleWidth() > self.player.getPlayerLeft();
    var notOnRight = self.obstacle.getObstacleLeft() < self.player.getPlayerLeft()+self.player.getPlayerWidth();

    if (notOnTop && notOnLeft && notOnRight) {
        
        clearInterval(self.newInterval);
        self.onEnded();

    }

}

Game.prototype.destroy = function () {
    
    var self = this;

    self.game.remove();

}

Game.prototype.onGameOver = function (callback) {

    var self = this;

    self.onEnded = callback;

}