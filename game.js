let computerPoints = 0, playerPoints = 0

function getComputerChoice() {    //Computer selects a random choice
    let computerPlay = ['Scissors', 'Paper', 'Rock']
    return computerPlay[Math.floor(Math.random() * 3)]
}

function playRound(computerSelection, playerSelection) {     // This func with define winner 
    if (computerSelection == playerSelection) {
        return "It's a Tie"
    } else {
        return defineWinner(computerSelection, playerSelection)
    }
}

function defineWinner(computerSelection, playerSelection) {
    if (computerSelection == "Scissors") {
        if (playerSelection == "Paper") {
            computerPoints = computerPoints + 1;
            return computerPoints;
        } else {
            playerPoints = playerPoints + 1;
            return playerPoints;
        }
    }
    if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            computerPoints = computerPoints + 1;
            return computerPoints;
        } else {
            playerPoints = playerPoints + 1;
            return playerPoints;
        }
    }
    if (computerSelection == "Rock") {
        if (playerSelection == "Scissors") {
            computerPoints = computerPoints + 1;
            return computerPoints;
        } else {
            playerPoints = playerPoints + 1;
            return playerPoints;
        }
    }
}

function jugar(playerSelection) {
    computerSelection = getComputerChoice();
    console.log("El PC jugó: " + computerSelection + ". Tu jugaste: " + playerSelection);
    resultadoRonda = playRound(computerSelection, playerSelection);
    if (resultadoRonda == "It's a Tie") {
        console.log("Empataron!!!. Juegen otra Ronda");
    }
    console.log("Tu puntaje: " + playerPoints);
    console.log("El Puntaje del PC: " + computerPoints);

    if (playerPoints + computerPoints == 5) {
        if (playerPoints > computerPoints) {
            console.log("Congratulations!!!! You WIN!!!");
        } else {
            console.log("Loser!!!");
        }
        console.log("Juega de nuevo!!");
        computerPoints = 0, playerPoints = 0
    }
}

//add event listener to buttons

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        jugar(button.innerText);
    });
});
