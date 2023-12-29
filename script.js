
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let randomChoice;

    if (randomInt == 0) {
        randomChoice = "Rock";
    } else if(randomInt == 1) {
        randomChoice = "Paper";
    } else {
        randomChoice = "Scissors";
    }

    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    let message = `Player: ${playerSelection} Computer: ${computerSelection}`;
    let outcome; 
    

    if (playerSelection.toLowerCase() == "rock") {
        if(computerSelection.toLowerCase() == "rock") {
            outcome = "Tie!";
        }

        else if (computerSelection.toLowerCase() == "paper") {
            outcome = "You Lose!";
        }

        else if (computerSelection.toLowerCase() == "scissors") {
            outcome = "You Win!";
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if(computerSelection.toLowerCase() == "rock") {
            outcome = "You Win!";
        }

        else if (computerSelection.toLowerCase() == "paper") {
            outcome = "Tie!";
        }

        else if (computerSelection.toLowerCase() == "scissors") {
            outcome = "You Lose!";
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if(computerSelection.toLowerCase() == "rock") {
            outcome = "You Lose!";
        }

        else if (computerSelection.toLowerCase() == "paper") {
            outcome = "You Win!";
        }

        else if (computerSelection.toLowerCase() == "scissors") {
            outcome = "Tie!";
        }
    }
    console.log(message);
    console.log(outcome);

    return outcome;
}


function game() {
    let score = 0;

    for (let i = 0; i <= 4; i++) {
        let playerSelection = prompt("What will you choose?");
        let outcome = playRound(playerSelection);

        if( outcome.toLowerCase() == "you win!") {
            score++;
        } else if (outcome.toLowerCase() == "you lose!") {
            score--;
        }
    }

    if (score < 2) {
        console.log("YOU LOSTTT!");
    }

    else {
        console.log("YOU WONNJNN!");
    }

}

game();
