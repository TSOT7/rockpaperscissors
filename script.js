
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let randomChoice;

    if (randomInt == 0) {
        randomChoice = "Rock";
    }

    else if(randomInt == 1) {
        randomChoice = "Paper";
    }

    else {
        randomChoice = "Scissors";
    }
    
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    let message = `Player: ${playerSelection} Computer: ${computerSelection}`;

    console.log(message);

    if (playerSelection.toLowerCase() == "rock") {
        if(computerSelection.toLowerCase() == "rock") {
            console.log("Tie!");
        }

        else if (computerSelection.toLowerCase() == "paper") {
            console.log("You Lose!");
        }

        else if (computerSelection.toLowerCase() == "scissors") {
            console.log("You Win!");
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if(computerSelection.toLowerCase() == "rock") {
            console.log("You Win!");
        }

        else if (computerSelection.toLowerCase() == "paper") {
            console.log("Tie!");
        }

        else if (computerSelection.toLowerCase() == "scissors") {
            console.log("You Lose!");
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if(computerSelection.toLowerCase() == "rock") {
            console.log("You Lose!");
        }

        else if (computerSelection.toLowerCase() == "paper") {
            console.log("You Win!");
        }

        else if (computerSelection.toLowerCase() == "scissors") {
            console.log("Tie!");
        }
    }
}
