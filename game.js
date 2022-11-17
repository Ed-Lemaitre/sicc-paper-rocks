let computerPoints = 0, playerPoints = 0

function getComputerChoice() {    //Computer selects a random choice
    let computerPlay = ['s', 'p', 'r']
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
    if (computerSelection == "s") {
        if (playerSelection == "p") {
            computerPoints = computerPoints + 1;
            return computerPoints;
        } else {
            playerPoints = playerPoints + 1;
            return playerPoints;
        }
    }
    if (computerSelection == "p") {
        if (playerSelection == "r") {
            computerPoints = computerPoints + 1;
            return computerPoints;
        } else {
            playerPoints = playerPoints + 1;
            return playerPoints;
        }
    }
    if (computerSelection == "r") {
        if (playerSelection == "s") {
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
        i = i - 1;
        console.log("Tu puntaje: " + playerPoints);
        console.log("El Puntaje del PC: " + computerPoints);
    } else {
        console.log("Tu puntaje: " + playerPoints);
        console.log("El Puntaje del PC: " + computerPoints);
    }
    if (playerPoints > computerPoints) {
        console.log("Congratulations!!!! You WIN!!!");
    } else {
        console.log("Loser!!!");
    }


}

//add event listener to buttons

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        jugar(button.innerText);
    });
});
