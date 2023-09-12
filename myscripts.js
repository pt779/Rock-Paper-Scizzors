let choices = ["rock", "paper", "scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function getPlayerChoice () {
    let playerChoice = prompt ("rock, paper or scizzors?")
    
        return playerChoice
}

let escapeGame = 0;
let draw = 0;
let humanScore = 0;
let computerScore = 0;
let winner = 0;

function singleRound (playerSelection, computerSelection) {
    if (playerSelection === ""
    || playerSelection === null) {
        escapeGame += 1
        alert ("I hope you play again another time");
        return "Game could not be played";
    } else if (computerSelection === "rock" && playerSelection.toLowerCase () === "paper" 
    || computerSelection === "paper" && playerSelection.toLowerCase () === "scizzors"
    || computerSelection === "scizzors" && playerSelection.toLowerCase () === "rock") {
        humanScore += 1
        return `You chose ${playerSelection.toLowerCase()}
The computer chose ${computerSelection}
Woohoo, you win!`;
    } else if (computerSelection === "rock" && playerSelection.toLowerCase () === "scizzors" 
    || computerSelection === "paper" && playerSelection.toLowerCase () === "rock"
    || computerSelection === "scizzors" && playerSelection.toLowerCase () === "paper") {
        computerScore += 1
        return `You chose ${playerSelection.toLowerCase()}
The computer chose ${computerSelection}
Ahh shucks, the computer wins this round`;
    } else if (computerSelection === playerSelection.toLowerCase ()) {
        draw += 1
        return `You chose ${playerSelection.toLowerCase()}
The computer chose ${computerSelection}
It's a draw`;
    } else {
        alert ("Check your spelling fam")
        return "Game could not be played";
    }
}

function keepScore () {
    let humanScoreText = `Your score is currently ${humanScore}`;
    let computerScoreText = `The computer's score is currently ${computerScore}`;
    console.log(humanScoreText);
    console.log (computerScoreText);
}

function gameWinner () {
    
    if (humanScore === 5) {
        alert ("You're the winner!!");
        return console.log ("Game over")
    } else if (computerScore === 5) {
        alert ("The computer is the winner, better luck next time");
        return console.log ("Game over")
    } else if (draw === 10) {
        alert ("It's a draw... how anticlimatic :/");
        return console.log ("Game over")
    }
}

function game () {
    for (let i = 0; i < 20; i++) {
        let playerSelection = getPlayerChoice ();
        let computerSelection = getComputerChoice ();
        let playRound = singleRound (playerSelection, computerSelection)
        console.log(playRound);
        keepScore ();
        gameWinner ();
        if (escapeGame === 1 || humanScore === 5 || computerScore === 5 || draw === 10) {
            break;
        }
        
    }
}

game ()