let choices = ["Rock", "Paper", "Scizzors"];

function getComputerChoice () {
    return choices[(Math.floor(Math.random() * choices.length))];
}

console.log(getComputerChoice ())
 