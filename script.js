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

function getComputerChoice() {
    const pcChoice = Math.floor(Math.random() * 3 + 1);
    return pcChoice
}

/*function playerSelection() {
    let playerChoice
    rock.addEventListener('click', () => {
        playerChoice = 'rock'
    })
    return playerChoice
}*/

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection)
    if (playerSelection === 'rock' && computerSelection === 2) {
        pcScore++
        console.log( "You chose rock and computer chose paper! Computer won!")
    } else if (playerSelection === 'rock' && computerSelection === 3) {
        playerScore++
        console.log( "You chose rock and computer chose scissors! You won!")
    } else if (playerSelection === 'paper' && computerSelection === 1) {
        playerScore++
        console.log( "You chose paper and computer chose rock! You won!")
    } else if (playerSelection === 'paper' && computerSelection === 3) {
        pcScore++
        console.log( "You chose paper and computer chose scissors! Computer won!")
    } else if (playerSelection === 'scissors' && computerSelection === 1) {
        pcScore++
        console.log( "You chose scissors and computer chose rock! Computer Won!")
    } else if (playerSelection === 'scissors' && computerSelection === 2) {
        playerScore++
        console.log( "You chose scissors and computer chose paper! You won!")
    } else {
        console.log( "It's a tie!")
    }
}

/*function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection(), getComputerChoice()))
    }
    if (playerScore > pcScore) {
        return (`Your score is ${playerScore} vs ${pcScore}! You won!`)
    } else if (pcScore > playerScore) {
        return (`Your score is ${playerScore} vs ${pcScore}! You lost!`)
    } else {
        return (`It's a draw! the scores are ${playerScore} and ${pcScore}`)
    }
}
console.log(game()) */