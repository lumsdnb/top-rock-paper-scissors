function computerPlay() {
    let choices = ["rock" , "paper" , "scissors"];
    let choice = choices[Math.floor(Math.random() * 3)]
    return choice;
}

//ask player to pick rock paper or scissors
//play single round


function playRound(playerSelection, computerSelection) {
    // player picks rock
    const playerPickLowerCase = playerSelection.toLowerCase();
    switch (playerPickLowerCase) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie! Rock vs rock";
                    break;
                case "paper":
                    return "You lose! Paper beats rock";
                    break;
                case "scissors":
                    return "You win! Scissors beat rock";
                default:
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You win! Paper beats rock";
                    break;
                case "paper":
                    return "Tie! Paper vs paper";
                    break;
                case "scissors":
                    return "You lose! Scissors beats paper";
                default:
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lose! Rock beats scissors";
                    break;
                case "paper":
                    return "You win! Scissors beats paper";
                    break;
                case "scissors":
                    return "Tie! Scissors vs scissors";
                default:
                    break;
            }
            break;

        default:
            return "invalid"
            break;
    }
}

function game() {
    let playerSelection = "";
    let computerSelection = computerPlay();

    playerSelection = prompt("enter rock, paper, or scissors");
    playRound(playerSelection, computerSelection);

    playerSelection = prompt("enter rock, paper, or scissors");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    playerSelection = prompt("enter rock, paper, or scissors");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    playerSelection = prompt("enter rock, paper, or scissors");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    playerSelection = prompt("enter rock, paper, or scissors");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}