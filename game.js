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
        return "lest see"
    }
}

console.log("computer" + computerSelection)
console.log("player" + playerSelection)
console.log(playRound(computerSelection, playerSelection))