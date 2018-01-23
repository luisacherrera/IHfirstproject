'use strict';

function Obstacle (gameGrid) {

    function createObstacle () {

        self.obstacle = document.createElement('div');
        self.obstacle.setAttribute('id', 'bump');
        self.obstacleLeft = 0;
        gameGrid.appendChild(self.obstacle);

    }

    createObstacle();

    function moveObstacle () {
    self.obstacle;
    self.obstacle.style.display = 'none';
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

        // check();
        
    }

    }

    moveObstacle();


}