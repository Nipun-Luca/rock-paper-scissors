const gamePicks = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let total_rounds = 0;

let winning_announcement = document.getElementById("win-announcement");

let button1 = document.getElementById("rock");
let button2 = document.getElementById("paper");
let button3 = document.getElementById("scissors");


function handleClick(event) {
    playerSelection = event.target.id;
    game()
}

//Add event listeners to the buttons
button1.addEventListener("click", handleClick);
button2.addEventListener("click", handleClick);
button3.addEventListener("click", handleClick);


function getComputerChoice(){
    let select = Math.floor(Math.random() * 3);
    return gamePicks[select];
}

function game(){
    let display_player_score = document.getElementById("player-score");
    let display_computer_score = document.getElementById("computer-score");

    computerSelection = getComputerChoice();


    //Winning conditions
    if (playerSelection == computerSelection) {
        winning_announcement.textContent = `Tie, ${playerSelection} and ${computerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winning_announcement.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        display_player_score.textContent = playerScore;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winning_announcement.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        display_player_score.textContent = playerScore;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winning_announcement.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        display_player_score.textContent = playerScore;
    } else {
        winning_announcement.textContent = `You lose, ${playerSelection} beats ${computerSelection}`;
        computerScore++;
        display_computer_score.textContent = computerScore;
    }



    //Game end condition
    total_rounds++;
    if (total_rounds == 5){
        if (playerScore == computerScore){
            winning_announcement.textContent = "Game Over! It's a tie";
        } else if (playerScore > computerScore) {
            winning_announcement.textContent = "Game Over! Player wins";
        } else {
            winning_announcement.textContent = "Game Over! Computer wins";
        }

        button1.removeEventListener("click", handleClick);
        button2.removeEventListener("click", handleClick);
        button3.removeEventListener("click", handleClick);
    }
}