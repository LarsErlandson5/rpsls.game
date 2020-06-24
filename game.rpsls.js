"use strict";

const rock;         // crushes Scissors  
const paper;         // covers Rock 
const scissors;      // cuts Paper 
const lizard;        // poisons Spock 
const spock;         //smashes Scissors 

class Game{
    constructor(){
        this.playerOne = new Player("Lars");
        this.playTwo = new Player("Damon");

    }

}

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }

}


class Gestures{
    constructor(){

    }

}