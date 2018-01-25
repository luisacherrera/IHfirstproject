'use strict';

function Obstacle (gameGrid) {

    var self = this;

    self.obstacle = document.createElement('div');
    self.obstacle.setAttribute('class', 'bump');
    gameGrid.appendChild(self.obstacle);

    self.obstacleHeight = 70;
    self.obstacleWidth = 80;

    self.pos = 0;

    self.obstacleLeft = 0;

}

Obstacle.prototype.moveObstacle = function () {

    var self = this;

    self.pos +=1;

    self.obstacle.style.top = self.pos + 'px';

    if (self.pos > 0) {
        self.obstacle.style.display = 'block';
    }

    if (self.pos === 600) {
        self.obstacle.remove();
    }
        
}



Obstacle.prototype.changeObstacleLeft = function () {

    var self = this;

    self.obstacleLeft += 1;

    self.obstacle.style.left =self.obstacleLeft + 'px';

    if (self.obstacleLeft === 400) {
        self.obstacleLeft = -100;
    }

}



Obstacle.prototype.getObstacleLeft = function () {

    var self = this;

    return parseInt(self.obstacleLeft);

}

Obstacle.prototype.getObstacleWidth = function () {

    var self = this;

    return self.obstacleWidth;

}

Obstacle.prototype.getObstacleTop = function () {

    var self = this;

    return parseInt(self.obstacle.style.top);

}

Obstacle.prototype.getObstacleHeight = function () {

    var self = this;

    return self.obstacleHeight;

}



