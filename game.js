'use strict';


function Game (mainSite) {


    var self = this;

    self.onEnded;

    self.game = document.createElement('div');
    self.game.setAttribute('id', 'game');

    // INSTRUCTIONS

    self.instructions = document.createElement('img');
    self.instructions.setAttribute('id', 'instructions');
    self.instructions.setAttribute('src', 'images/instructions.png');
    self.game.appendChild(self.instructions);

    // GAMEGRID

    self.gameGrid = document.createElement('div');
    self.gameGrid.setAttribute('id', 'grid');
    self.game.appendChild(self.gameGrid);

    var gameGrid = self.gameGrid;
    
    // PLAYER

    self.player = new Player(gameGrid);

    self.playerTop = self.player.getPlayerTop();
    self.playerWidth = self.player.getPlayerWidth();
    document.onkeydown = self.player.movePlayer.bind(self.player);

    // OBSTACLES

    self.obstaclesArray = [];

    self.counter = 100;

    self.pushInterval = setInterval(function (){
        
        self.counter --;
        
        if (self.counter >= 0){
            self.obstaclesArray.push(new Obstacle(gameGrid));
        }

    },1500);
    
    self.updateObstacle();

    //BACKGROUND MUSIC

    self.backGroundMusic = document.createElement('audio');
    self.backGroundMusic.setAttribute('src', 'audios/duel-fates.mp3');
    self.backGroundMusic.setAttribute('autoplay', 'true');
    self.game.appendChild(self.backGroundMusic);

    mainSite.appendChild(self.game);

}

Game.prototype.updateObstacle = function () {

    var self = this;

    self.newInterval = setInterval(function () {
        
        self.obstaclesArray.forEach(function (obstacle) {
            obstacle.moveObstacle();
            self.check(obstacle);
        })

    }, 10)
    
}

Game.prototype.check = function (obstacle) {

    var self = this;

    var collideTop = obstacle.getObstacleTop()+obstacle.getObstacleHeight() > self.player.getPlayerTop();
    var collideBottom = obstacle.getObstacleTop()+obstacle.getObstacleHeight() < self.player.getPlayerBottom()
    var collideLeft = obstacle.getObstacleLeft()+obstacle.getObstacleWidth() > self.player.getPlayerLeft();
    var collideRight = obstacle.getObstacleLeft() < self.player.getPlayerLeft()+self.player.getPlayerWidth();

    if (collideTop && collideBottom && collideLeft && collideRight) {
        
        clearInterval(self.newInterval);
        clearInterval(self.pushInterval);
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