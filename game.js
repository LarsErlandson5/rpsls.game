"use strict";

const gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];    

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
        this.playerTwo = new Player(prompt("Enter a name for plater 2."));
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
            //if(this.playerOne)
            }
            if (this.playerOne.score > this.playerTwo.score){
                console.log(`${this.playerOne.name}, is the WINNER!!!`)
            }
            else{
                console.log(`${this.playerTwo.name}, is the Winner!!!`)
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
