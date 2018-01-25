'use strict';


function Game (mainSite) {


    var self = this;

    self.onEnded;

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

    // self.obstaclesArray = []

    // self.obstaclesArray.push(new Obstacle(gameGrid));

    // self.obstacle = self.obstaclesArray[i];

    self.obstacle = new Obstacle(gameGrid);

    self.updateObstacle();

    mainSite.appendChild(self.game);

}

Game.prototype.updateObstacle = function () {

    var self = this;

    self.newInterval = setInterval(function () {
        self.obstacle.moveObstacle();
        self.check();
    }, 10)

}

Game.prototype.check = function () {

    var self = this;

    var collideTop = self.obstacle.getObstacleTop()+self.obstacle.getObstacleHeight() > self.player.getPlayerTop();
    var collideBottom = self.obstacle.getObstacleTop()+self.obstacle.getObstacleHeight() < self.player.getPlayerBottom()
    var collideLeft = self.obstacle.getObstacleLeft()+self.obstacle.getObstacleWidth() > self.player.getPlayerLeft();
    var collideRight = self.obstacle.getObstacleLeft() < self.player.getPlayerLeft()+self.player.getPlayerWidth();

    if (collideTop && collideBottom && collideLeft && collideRight) {
        
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