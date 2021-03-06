'use strict';

function Player (gameGrid) {

    var self = this;

    self.player = document.createElement('div');
    self.player.setAttribute('id', 'player');
    gameGrid.appendChild(self.player);

    self.playerLeft = 0;
    self.playerTop = 530;
    self.playerWidth = 80;
    self.playerBottom = 600;

}

Player.prototype.movePlayer = function (e) {

    var self = this;
    
    if (e.keyCode==37) {
        self.playerLeft -= 100;
        self.player.style.left = self.playerLeft + 'px';
        if (self.playerLeft <=-10) {
            self.playerLeft +=100;
            self.player.style.left = self.playerLeft + 'px';
        }
    }
    
    if (e.keyCode==39) {
        self.playerLeft += 100;
        self.player.style.left = self.playerLeft + 'px';
        if (self.playerLeft >=310) {
            self.playerLeft -=100;
            self.player.style.left = self.playerLeft + 'px';
        }
    }

    // if (e.keyCode==38) {
    //     self.playerTop -= 100;
    //     self.player.style.top = self.playerTop + 'px';
    // }

    // if (e.keyCode==40) {
    //     self.playerTop += 100;
    //     self.player.style.top = self.playerTop + 'px';
    // }

}

Player.prototype.getPlayerLeft = function () {

    var self = this;

    return self.playerLeft;

}

Player.prototype.getPlayerWidth = function () {

    var self = this;

    return self.playerWidth;

}

Player.prototype.getPlayerTop = function () {

    var self = this;

    return self.playerTop;

}

Player.prototype.getPlayerBottom = function () {

    var self = this;

    return self.playerBottom;

}



