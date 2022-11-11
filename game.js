function getComputerChoice() {
    let computerPlay = ['s','p','r']
    return computerPlay[Math.floor(Math.random()*3)]
}

computerSelection = getComputerChoice()
playerSelection = prompt("Enter your selection: ").toLowerCase()[0]

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
            return "You Lose! Scissors beats Paper."
        } else {
            return "You Win! Rocks beats Scissors."
        }
    }
    if (computerSelection == "p") {
        if (playerSelection == "r") {
            return "You Lose! Paper beats Rock."
        } else {
            return "You Win! Scissors beats Paper."
        }
    }
    if (computerSelection == "r") {
        if (playerSelection == "s") {
            return "You Lose! Rock beats Scissors."
        } else {
            return "You Win! Paper beats Rock."
        }
    }
}




console.log("computer" + computerSelection)
console.log("player" + playerSelection)
console.log(playRound(computerSelection, playerSelection))