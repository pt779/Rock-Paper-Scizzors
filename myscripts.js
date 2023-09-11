let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function getPlayerChoice () {
    let playerChoice = prompt ("rock, paper or scizzors?")
    if (playerChoice === "" 
    || playerChoice === null) {
    alert ("I hope you play another time");
    return "Game could not be played";
    } else {
        return playerChoice.toLowerCase ()
    }
}
 
const playerSelection = getPlayerChoice ();
const computerSelection = getComputerChoice ();

function playRound (playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper" 
    || computerSelection === "paper" && playerSelection === "scizzors"
    || computerSelection === "scizzors" && playerSelection === "rock") {
        return `The computer chose ${computerSelection};
Woohoo, you win!`;
    } else if (computerSelection === "rock" && playerSelection === "scizzors" 
    || computerSelection === "paper" && playerSelection === "rock"
    || computerSelection === "scizzors" && playerSelection === "paper") {
        return `The computer chose ${computerSelection};
Ahh shucks, the computer wins this time`;
    } else if (computerSelection === playerSelection) {
        return `The computer chose ${computerSelection};
It's a draw`;
    } else {
        return "Game could not be played";
    }
}

console.log(playRound(playerSelection, computerSelection))