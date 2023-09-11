let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function getPlayerChoice () {
    let playerChoice = prompt ("rock, paper or scizzors?")
    
        return playerChoice
}
 
const playerSelection = getPlayerChoice ();
const computerSelection = getComputerChoice ();
let winner = 0;
let humanScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === ""
    || playerSelection === null) {
        alert ("I hope you play again another time");
        return "Game could not be played";
    } else if (computerSelection === "rock" && playerSelection.toLowerCase () === "paper" 
    || computerSelection === "paper" && playerSelection.toLowerCase () === "scizzors"
    || computerSelection === "scizzors" && playerSelection.toLowerCase () === "rock") {
        humanScore += 1
        return `The computer chose ${computerSelection};
Woohoo, you win!`;
    } else if (computerSelection === "rock" && playerSelection.toLowerCase () === "scizzors" 
    || computerSelection === "paper" && playerSelection.toLowerCase () === "rock"
    || computerSelection === "scizzors" && playerSelection.toLowerCase () === "paper") {
        computerScore += 1
        return `The computer chose ${computerSelection};
Ahh shucks, the computer wins this time`;
    } else if (computerSelection === playerSelection.toLowerCase ()) {
        return `The computer chose ${computerSelection};
It's a draw`;
    } else {
        alert ("Check your spelling fam")
        return "Game could not be played";
    }
}


function game () {
    for (let playRound = 0; playRound < 5; playRound++) {
        console.log("test")
    }
}

console.log (playRound(playerSelection, computerSelection))