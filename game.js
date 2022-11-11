function getComputerChoice() {
    let computerPlay = ['s','p','r']
    return computerPlay[Math.floor(Math.random()*3)]
}

computerSelection = getComputerChoice()
playerSelection = prompt("Enter your selection: ").toLowerCase()[0]


console.log(computerSelection)
console.log(playerSelection)