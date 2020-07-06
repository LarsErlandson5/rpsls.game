"use strict";

class Game {
    constructor() {
        this.numberOfPlayers = prompt("Enter nuber of players","1 or 2");
        this.numberOfGames = 3;
    }
    rungame() {
        console.log("Welcome to Rock Paper Scissors Lizard Spock");
        console.log("Its like rock paper scissors only better. Here are the rules: ");
        console.log("Scissors decapitate Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.");
        this.numberOfGames;
        this.playerOne = new Player(prompt("Enter a name for player 1."));
        if (this.numberOfPlayers > 1) {
            this.playerTwo = new Player(prompt("Enter a name for player 2.")); 
            for (let i = 0; 3>i; i++) {
                this.playerOne.getGesture()
                console.log(this.playerOne.chosenGesture)
                this.playerTwo.getGesture()
                console.log(this.playerOne.score, this.playerTwo.score); 
                this.pickWinner();
            }
        }
        else {
            this.playerTwo = new Ai();
            for (let i = 0; 3 > i; i++) {
                this.playerOne.chosenGesture = this.playerOne.getGesture();
                this.playerTwo.chosenGesture = new Ai().chosenGesture;
                console.log(this.playerOne.chosenGesture,this.playerTwo);
                this.pickWinner();
               // console.log(this.playerOne.score, this.playerTwo.score);
            }
        }
        if (this.playerOne.score > this.playerTwo.score) {
            console.log(`${this.playerOne.name}, is the Winner!!!`)
        }
        else {
            console.log(`${this.playerTwo.name}, is the Winner!!!`)
        }
    }
    pickWinner() {
        
        if (this.playerOne.chosenGesture < this.playerTwo.chosenGesture) {
            this.playerTwo.score++;
        }
        else if (this.playerOne.chosenGesture == this.playerTwo.chosenGesture) {
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
        switch (gesture.toLowerCase()) {
            case "rock":
                this.chosenGesture = this.gestures[0];
                break;
            case "paper":
                this.chosenGesture = this.gestures[1];
                break;
            case "scissors":
                this.chosenGesture = this.gestures[2];
                break;
            case "lizard":
                this.chosenGesture = this.gestures[3];
                break;
            case "spock":
                this.chosenGesture = this.gestures[4];
                break;
            default:
                throw new Error("Invalid Entry")
        }
    }
}

class Ai extends Player {
    constructor() {
        super()
        this.chosenGesture = this.gestures[this.randomNumberGenerator()];// [this.randomNumberGenerator()];

    }
    randomNumberGenerator() {
        let rng = Math.floor((Math.random() * this.gestures.length) + 1) - 1;
        return rng;
    }


}

class Gesture {
    constructor(handSign) {
        this.handSign = handSign;
    }
}

class Rock extends Gesture {
    constructor(handSign) {
        super(handSign)
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
    constructor(handsign) {
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
        super("scissors")
    }
    compare(gesture) {
        if (gesture.handSign === "paper" || gesture.handSign === "lizard") {
            return 1;
        }
        else if (gesture.handSign === "scissors") {
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
