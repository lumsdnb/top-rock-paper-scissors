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
                    console.log("Tie! Rock vs rock");
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock");
                    break;
                case "scissors":
                    console.log("You win! Scissors beat rock");
                default:
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("You win! Paper beats rock");
                    break;
                case "paper":
                    console.log("Tie! Paper vs paper");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats paper");
                default:
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log("You lose! Rock beats scissors");
                    break;
                case "paper":
                    console.log("You win! Scissors beats paper");
                    break;
                case "scissors":
                    console.log("Tie! Scissors vs scissors");
                default:
                    break;
            }
            break;

        default:
            break;
    }
}

function game() {

    let playerSelection = prompt("enter rock, paper, or scissors");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
    let playerSelection = prompt("enter rock, paper, or scissors");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    let playerSelection = prompt("enter rock, paper, or scissors");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    let playerSelection = prompt("enter rock, paper, or scissors");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    let playerSelection = prompt("enter rock, paper, or scissors");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}