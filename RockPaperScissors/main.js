function computerPlay() {
        const gameChoices = ['rock', 'paper', 'scissors']
        return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

function playRound(playerSelection, computerSelection) {
let playerPoint = 0;

if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" &&
computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock"))
{
    playerPoint ++;
    console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
}

    else {
    console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
}

return playerPoint;
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
