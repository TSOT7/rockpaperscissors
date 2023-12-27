
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

    console.log(randomChoice);
}

getComputerChoice();

