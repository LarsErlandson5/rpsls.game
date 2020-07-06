"use strict";
//const gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];    
// Rock crushes Scissors  
// Scissors cuts Paper 
// Paper covers Rock 
// Rock crushes Lizard 
// Lizard poisons Spock 
// Spock smashes Scissors 
// Scissors decapitates Lizard 
// Lizard eats Paper 
// Paper disproves Spock 
// Spock vaporizes Rock  
class Game {
    constructor() {
        this.numberOfPlayers = prompt("Enter number of players");
        this.playerOne = new Player(prompt("Enter a name for player one."));
        this.playerTwo = new Player(prompt("Enter a name for player 2."));
        this.numberOfGames = 1;
        this.gesture = null;
        //number of games (best of style)
        //array of players
        //score
    }
    rungame() {
        for (let i = 0; this.numberOfGames > i; i++) {
            this.playerOne.gesture = this.playerOne.getGesture();
            this.playerTwo.gesture = this.playerTwo.getGesture();
            this.pickWinner();
            console.log(this.playerOne.score, this.playerTwo.score);
            //call the decide who wins method

        }
            //if(this.playerOne)
            
            if (this.playerOne.score > this.playerTwo.score){
                console.log(`${this.playerOne.name}, won this round`)
            }
            else{
                console.log(`${this.playerTwo.name}, won this round`)
            }
    }
    pickWinner() {

        if (this.playerOne.gesture === 'rock' && this.playerTwo.gesture === 'scissors') {
            this.playerOne.score++;
        }

        else if (this.playerOne.gesture === 'rock' && this.playerTwo.gesture === 'lizard') {
            this.playerOne.score++;
        }

        else if (this.playerOne.gesture === 'paper' && this.playerTwo.gesture === 'spock') {
            this.playerOne.score++;
        }

        else if (this.playerOne.gesture === 'scissors' && this.playerTwo.gesture === 'lizard') {
            this.playerOne.score++;
        }
        else if (this.playerOne.gesture === 'lizard' && this.playerTwo.gesture === 'spock') {
            this.playerOne.score++;
        }
        else if (this.playerOne.gesture === 'spock' && this.playerTwo.gesture === 'scissors') {
            this.playerOne.score++;
        }

        else if (this.playerOne.gesture === this.playerTwo.gesture) {
            console.log("Its a tie, try again.");
        }
        else {
            this.playerTwo.score++;
        }

    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }
    getGesture() {
        let gesture = prompt(`${this.name}, Pick only one. rock, paper, scissors, lizard, spock`);
        return gesture.toLowerCase();
    }

}
class Score {
    constructor() {
        this.score = 0;
    }
}
let game = new Game();
game.rungame();