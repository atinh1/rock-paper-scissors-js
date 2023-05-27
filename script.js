let pcScore = 0
let playerScore = 0
let playerSelection

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    playRound(playerSelection, getComputerChoice())
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    playRound(playerSelection, getComputerChoice())
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    playRound(playerSelection, getComputerChoice())
})

const statustxt = document.querySelector('.statustxt')
const scores = document.querySelector('.scores')

function getComputerChoice() {
    const pcChoice = Math.floor(Math.random() * 3 + 1);
    return pcChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 2) {
        pcScore++
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
        statustxt.textContent = "You chose rock and computer chose paper! Computer won!"
        checkScores()
    } else if (playerSelection === 'rock' && computerSelection === 3) {
        playerScore++
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
        statustxt.textContent = "You chose rock and computer chose scissors! You won!"
        checkScores()
    } else if (playerSelection === 'paper' && computerSelection === 1) {
        playerScore++
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
        statustxt.textContent = "You chose paper and computer chose rock! You won!"
        checkScores()
    } else if (playerSelection === 'paper' && computerSelection === 3) {
        pcScore++
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
        statustxt.textContent = "You chose paper and computer chose scissors! Computer won!"
        checkScores()
    } else if (playerSelection === 'scissors' && computerSelection === 1) {
        pcScore++
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
        statustxt.textContent = "You chose scissors and computer chose rock! Computer Won!"
        checkScores()
    } else if (playerSelection === 'scissors' && computerSelection === 2) {
        playerScore++
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
        statustxt.textContent = "You chose scissors and computer chose paper! You won!"
        checkScores()
    } else {
        statustxt.textContent = "It's a tie!"
        scores.textContent = "Your score: " + playerScore + " Computer Score: " +pcScore
    }
}
function checkScores(){
    if (playerScore == 5) {
        statustxt.textContent = "You Won!"
        scores.textContent = ""
        pcScore = 0
        playerScore = 0
    }else if (pcScore == 5) {
        statustxt.textContent = "Computer Won!"
        scores.textContent = ""
        playerScore = 0
        pcScore = 0
    }
}