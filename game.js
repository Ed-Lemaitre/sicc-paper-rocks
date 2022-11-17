let computerPoints = 0, playerPoints = 0, playerSelection = '', computerSelection = ''

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
    player_selection.innerText = `Sacaste ${playerSelection}`;
    computer_selection.innerText = `El computador sacó ${computerSelection}`;
    resultadoRonda = playRound(computerSelection, playerSelection);
    if (resultadoRonda == "It's a Tie") {
        resultado.innerText = "Empataron!!!. Juegen otra Ronda";
    } else {
        resultado.innerText = "";
    }
    p_player.innerText = `Tu puntaje es: ${playerPoints}`;
    p_computer.innerText = `El Computador tiene ${computerPoints} puntos.`;

    if (playerPoints + computerPoints == 5) {
        if (playerPoints > computerPoints) {
            resultado.innerText = "FELICITACIONES HAS GANADO. JUEGA DE NUEVO!!";
        } else {
            resultado.innerText = "PERDISTE!!. JUEGA DE NUEVO";
        }
        computerPoints = 0, playerPoints = 0
    }
}

const body = document.querySelector('body');
const div = document.createElement('div');
const h1title = document.createElement('h1');
const p_player = document.createElement('p');
const p_computer = document.createElement('p');
const player_selection = document.createElement('p');
const computer_selection = document.createElement('p');
const resultado = document.createElement('p');
body.appendChild(h1title);
body.appendChild(p_player);
body.appendChild(p_computer);
body.appendChild(player_selection);
body.appendChild(computer_selection);
body.appendChild(resultado);
h1title.innerText = "Bienvenido al juego!! Haz tu elección";


//add event listener to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        jugar(button.innerText);
    });
});
