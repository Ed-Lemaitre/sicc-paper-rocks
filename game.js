let computerPoints = 0, playerPoints = 0

function getComputerChoice() {
    let computerPlay = ['s','p','r']
    return computerPlay[Math.floor(Math.random()*3)]
}



function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection) {
        return "It's a Tie"
    } else {
        return defineWinner(computerSelection, playerSelection)
    }
}

function defineWinner(computerSelection,playerSelection){
    if (computerSelection == "s") {
        if (playerSelection == "p") {
            computerPoints = computerPoints + 1
            return computerPoints
        } else {
            playerPoints = playerPoints + 1
            return playerPoints
        }
    }
    if (computerSelection == "p") {
        if (playerSelection == "r") {
            computerPoints = computerPoints + 1
            return computerPoints
        } else {
            playerPoints = playerPoints + 1
            return playerPoints
        }
    }
    if (computerSelection == "r") {
        if (playerSelection == "s") {
            computerPoints = computerPoints + 1
            return computerPoints
        } else {
            playerPoints = playerPoints + 1
            return playerPoints
        }
    }
}

function playingGame() {
    for (let i = 0; i<5;i++){
        computerSelection = getComputerChoice()
        playerSelection = prompt("Enter your selection: ").toLowerCase()[0]
        resultadoRonda = playRound(computerSelection,playerSelection)
        if (resultadoRonda == "It's a Tie"){
            console.log("Empataron!!!. Jueguen nuevamente")
            i = i -1
        } else { 
            console.log("Tu puntaje: " + playerPoints)
            console.log("El Puntaje del PC: " + computerPoints)
        }
    }
    if (playerPoints > computerPoints) {
        console.log("Congratulations!!!! You WIN!!!")
    } else{
        console.log("Loser!!!")
    }


}


playingGame()