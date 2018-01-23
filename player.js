'use strict';

function Character (gameGrid) {

    self.character = document.createElement('div');
    self.character.setAttribute('id', 'player');
    gameGrid.appendChild(self.character);

    self.characterLeft = 0;

}

Character.prototype.moveCharacter = function (e) {

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


