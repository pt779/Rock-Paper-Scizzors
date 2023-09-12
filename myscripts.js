let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function getPlayerChoice () {
    let playerChoice = prompt ("rock, paper or scizzors?")
    
        return playerChoice
}


let winner = 0;

function singleRound (playerSelection, computerSelection) {
    if (playerSelection === ""
    || playerSelection === null) {
        alert ("I hope you play again another time");
        return "Game could not be played";
    } else if (computerSelection === "rock" && playerSelection.toLowerCase () === "paper" 
    || computerSelection === "paper" && playerSelection.toLowerCase () === "scizzors"
    || computerSelection === "scizzors" && playerSelection.toLowerCase () === "rock") {
        return `You chose ${playerSelection.toLowerCase()}
The computer chose ${computerSelection}
Woohoo, you win!`;
    } else if (computerSelection === "rock" && playerSelection.toLowerCase () === "scizzors" 
    || computerSelection === "paper" && playerSelection.toLowerCase () === "rock"
    || computerSelection === "scizzors" && playerSelection.toLowerCase () === "paper") {
        return `You chose ${playerSelection.toLowerCase()}
The computer chose ${computerSelection}
Ahh shucks, the computer wins this time`;
    } else if (computerSelection === playerSelection.toLowerCase ()) {
        return `You chose ${playerSelection.toLowerCase()}
The computer chose ${computerSelection}
It's a draw`;
    } else {
        alert ("Check your spelling fam")
        return "Game could not be played";
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice ();
        let computerSelection = getComputerChoice ();
        let playRound = singleRound (playerSelection, computerSelection)
        console.log(playRound)
    }
}

game ()