let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function getPlayerChoice() {
    let playerChoice = prompt ("rock, paper or scizzors?")
    playerChoice = playerChoice.toLowerCase()
    
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scizzors") {
        return playerChoice;
    } else if (playerChoice === undefined || playerChoice === null)  {
        alert ("I hope you play again another time")
    } else {
        alert ("You didn't type in your choice correctly, try reading a dictionary") 
    }
    
}

const playerSelection = getPlayerChoice ();
const computerSelection = getComputerChoice ();

function playRound (playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper" 
    || computerSelection === "paper" && playerSelection === "scizzors"
    || computerSelection === "scizzors" && playerSelection === "rock") {
        return `The computer chose ${computerSelection}
Woohoo, you win!`;
    } else if (computerSelection === "rock" && playerSelection === "scizzors" 
    || computerSelection === "paper" && playerSelection === "rock"
    || computerSelection === "scizzors" && playerSelection === "paper") {
        return `The computer chose ${computerSelection}
Ahh shucks, the computer wins this time`;
    } else if (computerSelection === playerSelection) {
        return `The computer chose ${computerSelection}
It's a draw`;
    } else {
        return "Game could not be played"
    }
}

console.log(playRound(playerSelection,computerSelection))
 