"use strict";

const rock = 1;         // crushes Scissors  
const paper = 2;         // covers Rock 
const scissors = 3;      // cuts Paper 
const lizard = null;        // poisons Spock 
const spock = null;         //smashes Scissors 

class Game {
    constructor() {
        this.playerOne = new Player("Lars");
        this.playerTwo = new Player("Damon");
        this.numberOfGames = prompt("How many games do you want to play?")
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
    }
    pickWinner() {
        //logic needed for tie
        if (this.playerOne.gesture < this.playerTwo.gesture) {
            this.playerTwo.score++;
        }
        else {
            this.playerOne.score++;
        }
    }

    //add to a players score
    //decide who wins for total score
    //later this would be our rng computer for one player


}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.gesture = null;
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
