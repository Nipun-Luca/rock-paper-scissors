const gamePicks = ["rock", "paper", "scissors"];
let  computerSelection;
let  playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let select = Math.floor(Math.random() * 3);
    return gamePicks[select];
}

function game(){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("TIE");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("YOU WIN");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("YOU WIN");
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("YOU WIN");
        playerScore++;
    } else {
        console.log("YOU LOSE")
        computerScore++;
    }
}

for (let i = 0; i < 5; i++) {
    game();
}

console.log("Player score: "+playerScore+", Computer score: "+computerScore)
if (playerScore == computerScore){
    console.log("It's a tie!")
} else if (playerScore > computerScore) {
    console.log("Player wins!")
} else {
    console.log("Computer wins!")
}