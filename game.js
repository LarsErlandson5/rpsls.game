"use strict";

class Game {
    constructor() {
        this.numberOfPlayers = prompt("Enter number of players");
        this.playerOne = new Player(prompt("Enter a name for player one."));
        this.playerTwo = null;
        this.numberOfGames = 1;
        this.gesture = null;
    }

    rungame() {
        if (this.numberOfPlayers == 2) {
            for (let i = 0; this.numberOfGames > i; i++) {
                this.playerTwo = new Player(prompt("Enter a name for player 2."));
                this.playerOne.gesture = this.playerOne.getGesture();
                this.playerTwo.gesture = this.playerTwo.getGesture();
            }
            this.pickWinner();
            console.log(this.playerOne.score, this.playerTwo.score);

        }
        else{
            for (let i = 0; this.numberOfGames > i; i++) {
                this.playerOne.gesture = this.playerOne.getGesture();
                this.playerAutomated = new Player;
                this.playerAutomated.getGesture();

            }
            this.pickWinner();
            console.log(this.playerOne.score, this.playerTwo.score);

        }
        

        if (this.playerOne.score > this.playerTwo.score) {
            console.log(`${this.playerOne.name}, won this round`)
        }
        else {
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
class Automated extends Player {
    constructor(name) {
        super("Squidward");
    }
    choosenGesture() {
        this.gesture = this.gesture[Math.floor(Math.random() * this.gesture.length)];
    }
}
class Score {
    constructor() {
        this.score = 0;
    }
}
let game = new Game();
game.rungame();