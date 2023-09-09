let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

const playerSelection = choices;
const computerSelection = getComputerChoice ();

function playRound (playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a draw";
    } else if (computerSelection === "rock" && playerSelection === "paper" 
    || computerSelection === "paper" && playerSelection === "rock"
    || computerSelection === "scizzors" && playerSelection === "paper") {
        return "Ahh shucks, the computer wins this time";
    } else {
        return "Woohoo, you win!";
    }
}

console.log(computerSelection)
console.log(playRound("paper",computerSelection))
 