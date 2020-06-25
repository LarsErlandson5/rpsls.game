"use strict";

class Game {
    constructor() {
        this.numberOfPlayers = prompt("Enter nuber of players");
        this.numberOfGames = prompt("How many games do you want to play?")
    }
    rungame() {
        if (this.numberOfPlayers > 1) {
        this.playerOne = new Player(prompt("Enter a name for player 1."));
        this.playerTwo = new Player(prompt("Enter a name for player 2."));
            for (let i = 0; this.numberOfGames > i; i++) {
                this.playerOne.chosenGesture = this.playerOne.getGesture();
                this.playerTwo.chosenGesture = this.playerTwo.getGesture();
                this.pickWinner();
                console.log(this.playerOne.score, this.playerTwo.score);
                //if(this.playerOne)
            }
            if (this.playerOne.score > this.playerTwo.score) {
                console.log(`${this.playerOne.name}, is the Winner!!!`)
            }
            else {
                console.log(`${this.playerTwo.name}, is the Winner!!!`)
            }
        }
        else {
            this.playerOne = new Player(prompt("Enter a name for player 1."));
            for (let i = 0; this.numberOfGames > i; i++) {
                this.playerOne.chosenGesture = this.playerOne.getGesture();
                this.playerAI.chosenGesture = this.playerAI.getGesture();
                this.pickWinner();
                console.log(this.playerOne.score, this.playerAI.score);
                //if(this.playerOne)
            }
            if (this.playerOne.score > this.playerAI.score) {
                console.log(`${this.playerOne.name}, is the WINNER!!!`)
            }
            else {
                console.log(`${this.playerAI.name}, is the Winner!!!`)
            }
        }
    }
    pickWinner() {
        let outCome = this.playerOne.gestures[0].compare(this.playerTwo.gesture[0]);
        console.log(outCome);
        if (this.playerOne.chosenGesture < this.playerTwo.chosenGesture) {
            this.playerTwo.score++;
        }
        else if (this.playerOne.chosenGestures[0] == (this.playerTwo.chosenGesture[0])) {
            return
        }
        else {
            this.playerOne.score++;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.chosenGesture = null;
        this.gestures = [new Rock(), new Paper(), new Sciccors(), new Lizard(), new Spock()];
    }
    getGesture() {
        let gesture = prompt(`${this.name}, Pick only one. rock, paper, scissors, lizard, spock`);
        switch(gesture){
            case "rock":
                this.chosenGesture = this.gestures[0];
                break;
            case "paper":
                this.chosenGesture = this.gestures[1];
                break;
            case "sciccors":
                this.chosenGesture = this.gestures[2];
                break;
            case "lizard":
                this.chosenGesture = this.gestures[3];
                break;
            case "spock":  
                this.chosenGesture = this.gestures[4];
            break;      }
    }
}

class Ai extends Player {
    constructor() {
        super()
    }
    randomNumberGenerator(){
        let rng = Math.floor(Math.random() * this.gestures.length);
     this.chosenGesture =this.gestures[rng];
 
    }

}

class Gesture {
    constructor(handSign) {
        this.handSign = handSign;
    }
}

class Rock extends Gesture {
    constructor() {
        super("Rock")
    }
    compare(gesture) {
        if (gesture.handSign === "scissors" || gesture.handSign === "lizard") {
            return 1;
        }
        else if (gesture.handSign === "rock") {
            return 0;
        }
        else {
            return -1;
        }
    }
}

class Paper extends Gesture {
    constructor() {
        super("paper")
    }
    compare(gesture) {
        if (gesture.handSign === "rock" || gesture.handSign === "spock") {
            return 1;
        }
        else if (gesture.handSign === "paper") {
            return 0;
        }
        else {
            return -1;
        }
    }
}

class Sciccors extends Gesture {
    constructor() {
        super("sciccors")
    }
    compare(gesture) {
        if (gesture.handSign === "paper" || gesture.handSign === "lizard") {
            return 1;
        }
        else if (gesture.handSign === "sciccors") {
            return 0;
        }
        else {
            return -1;
        }
    }
}

class Lizard extends Gesture {
    constructor() {
        super("lizard")
    }
    compare(gesture) {
        if (gesture.handSign === "spock" || gesture.handSign === "paper") {
            return 1;
        }
        else if (gesture.handSign === "lizard") {
            return 0;
        }
        else {
            return -1;
        }
    }
}

class Spock extends Gesture {
    constructor() {
        super("spock")
    }
    compare(gesture) {
        if (gesture.handSign === "rock" || gesture.handSign === "scissors") {
            return 1;
        }
        else if (gesture.handSign === "spock") {
            return 0;
        }
        else {
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
