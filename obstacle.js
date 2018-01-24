'use strict';

//NOT USING THIS RIGHT NOW

function Obstacle (gameGrid) {

    self.obstacle = document.createElement('div');
    self.obstacle.setAttribute('id', 'bump');
    self.obstacleLeft = 0;
    gameGrid.appendChild(self.obstacle);

}

Obstacle.prototype.getObstacleLeft = function () {

    return parseInt(self.obstacleLeft);

}

Obstacle.prototype.getObstacleWidth = function () {

    return parseInt(self.obstacle.clientWidth);

}

Obstacle.prototype.getObstacleTop = function () {

    return parseInt(self.obstacle.style.top);

}

Obstacle.prototype.getObstacleHeight = function () {

    return parseInt(self.obstacle.clientHeight);

}



