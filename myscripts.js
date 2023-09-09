let choices = ["Rock", "Paper", "Scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

const playerSelection = "rock";
const computerSelection = getComputerChoice ();

function playRound (playerSelection, computerSelection) {
    if (computerSelection === "Rock") {
        return "It's a draw";
    } else if (computerSelection === "Paper") {
        return "Ahh shucks, the computer wins this time";
    } else {
        return "Woohoo, you win!";
    }
}

console.log(playRound(playerSelection,computerSelection))
 