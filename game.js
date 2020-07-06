"use strict";

class Game {
    constructor() {
        this.numberOfPlayers = prompt("Enter number of players", "1 or 2");
        this.playerOne = new Player(prompt("Enter a name for player one."));
        this.playerTwo = null;
        this.Automated = new Player();
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
        else {
            for (let i = 0; this.numberOfGames > i; i++) {
                this.playerOne.gesture = this.playerOne.getGesture();
                this.playerAutomated = new Player.Automated();
                this.playerAutomated = this.playerAutomated.rng();
            }
            this.pickWinner();
            console.log(this.playerOne.score, this.playerAutomated.score);

        }


        if (this.playerOne.score > this.playerTwo.score) {
            console.log(`${this.playerOne.name}, won this round`)
        }
        else if (this.playerTwo.score > this.playerOne.score) {
            console.log(`${this.playerTwo.name}, won this round`)
        }
        else if (this.playerOne > this.playerAutomated.score) {
            console.log(`${this.playerOne.name}, won this round`)
        }
        else {
            console.log("Squidward is the winner...:(")
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
    constructor() {
        this.gesture = [];
    }
    rng() {
        randomNumber = [Math.floor(Math.random() * this.gesture.length)];
        switch (randomNumber) {
            case 1:
                return this.Automated.gesture = "rock";
            case 2:
                return this.Automated.gesture = "paper";
            case 3:
                return this.Automated.gesture = "scissors";
            case 4:
                return this.Automated.gesture = "lizard";
            case 5:
                return this.Automated.gesture = "spock";
        }
    }


}
class Score {
    constructor() {
        this.score = 0;
    }
}
let game = new Game();
game.rungame();