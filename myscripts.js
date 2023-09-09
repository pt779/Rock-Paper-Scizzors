let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

const playerSelection = choices;
const computerSelection = getComputerChoice ();

function playRound (playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper" 
    || computerSelection === "paper" && playerSelection === "scizzors"
    || computerSelection === "scizzors" && playerSelection === "rock") {
        return "Woohoo, you win!";
    } else if (computerSelection === "rock" && playerSelection === "scizzors" 
    || computerSelection === "paper" && playerSelection === "rock"
    || computerSelection === "scizzors" && playerSelection === "paper") {
        return "Ahh shucks, the computer wins this time";
    } else {
        return "It's a draw";
    }
}

console.log(computerSelection)
console.log(playRound("rock",computerSelection))
 