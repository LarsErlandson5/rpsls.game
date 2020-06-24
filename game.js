"use strict";
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
        if (this.playerOne.score > this.playerTwo.score) {
            console.log(`${this.playerOne.name}, is the WINNER!!!`)
        }
        else {
            console.log(`${this.playerTwo.name}, is the Winner!!!`)
        }
    }
    pickWinner() {
        //logic needed for tie
        let outCome =  this.playerOne.gestures[0].compare(this.playerTwo.ChosenGesture)
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
        this.gestures = [new Rock(), ne Gesture(), new Gesture()];
    }
    getGesture() {
        let gesture = prompt(`${this.name}, Pick only one. rock, paper, scissors, lizard, spock`);
        return gesture.toLowerCase();


    }
}

class Gesture{
    constructor(handSign){
        this.handSign = handSign;
    }
}

class Rock extends Gesture{
    constructor(){
        super("Rock")
    }
    compare(gesture){
        if(gesture.handSign === "scissors" || gesture.handSign === "lizard"){
            return 1;
        }
        else if (gesture.handSign === "rock"){
            return 0;
        }
        else{
            return -1;
        }
    }
}

class Rock extends Gesture{
    constructor(){
        super("Rock")
    }
    compare(gesture){
        if(gesture.handSign === "scissors" || gesture.handSign === "lizard"){
            return 1;
        }
        else if (gesture.handSign === "rock"){
            return 0;
        }
        else{
            return -1;
        }
    }
}

class Paper extends Gesture{
    constructor(){
        super("paper")
    }
    compare(gesture){
        if(gesture.handSign === "rock" || gesture.handSign === "spock"){
            return 1;
        }
        else if (gesture.handSign === "paper"){
            return 0;
        }
        else{
            return -1;
        }
    }
}

class Sciccors extends Gesture{
    constructor(){
        super("sciccors")
    }
    compare(gesture){
        if(gesture.handSign === "paper" || gesture.handSign === "lizard"){
            return 1;
        }
        else if (gesture.handSign === "sciccors"){
            return 0;
        }
        else{
            return -1;
        }
    }
}

class Lizard extends Gesture{
    constructor(){
        super("lizard")
    }
    compare(gesture){
        if(gesture.handSign === "spock" || gesture.handSign === "paper"){
            return 1;
        }
        else if (gesture.handSign === "lizard"){
            return 0;
        }
        else{
            return -1;
        }
    }
}

class Spock extends Gesture{
    constructor(){
        super("spock")
    }
    compare(gesture){
        if(gesture.handSign === "rock" || gesture.handSign === "scissors"){
            return 1;
        }
        else if (gesture.handSign === "spock"){
            return 0;
        }
        else{
            return -1;
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
