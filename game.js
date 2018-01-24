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

    // SCORE


    
    // PLAYER

    var gameGrid = self.gameGrid;

    self.player = new Player(gameGrid);

    self.playerTop = self.player.getPlayerTop();
    self.playerWidth = self.player.getPlayerWidth();
    document.onkeydown = self.player.movePlayer.bind(self.player);


    // OBSTACLES

    
    self.obstacle = document.createElement('div');
    self.obstacle.setAttribute('id', 'bump');
    self.obstacleLeft = 0;
    self.gameGrid.appendChild(self.obstacle);

    setInterval (changeLe, 1000)

    function changeLe () {

        self.obstacleLeft += 100;
        self.obstacle.style.left =self.obstacleLeft + 'px';

        if (self.obstacleLeft === 400) {
            self.obstacleLeft = -100;
        }

    }



    self.moveObstacle();

    mainSite.appendChild(self.game);


}

Game.prototype.moveObstacle = function () {

    var self = this;

    self.obstacle;
    self.obstacle.style.display = 'none';
    self.pos = -75;
    setInterval(frame, 10);
    function frame () {
        
        self.pos++;
        self.obstacle.style.top = self.pos + 'px';

        if (self.pos > 0) {
            self.obstacle.style.display = 'block';
        }

        if (self.pos === 600) {
            self.obstacle.remove();
        }

        self.check();
        
    }

}

Game.prototype.check = function () {

    var self = this;

    self.obstacleTop = parseInt(self.obstacle.style.top);
    self.obstacleHeight = parseInt(self.obstacle.clientHeight);
    self.obstacleWidth = parseInt(self.obstacle.clientWidth);

    var notOnTop = self.obstacleTop+self.obstacleHeight > self.playerTop;
    var notOnLeft = self.obstacleLeft+self.obstacleWidth > self.player.getPlayerLeft();
    var notOnRight = self.obstacleLeft < self.player.getPlayerLeft()+self.playerWidth;

    if (notOnTop && notOnLeft && notOnRight) {
        
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