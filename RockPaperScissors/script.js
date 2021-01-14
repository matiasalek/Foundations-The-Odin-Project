let computerScore = 0;
let playerScore = 0;

function computerPlay() {
	const gameChoices = ['rock', 'paper', 'scissors']
	return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

function playerWin(playerSelection, computerSelection) {
	console.log("You choose " + playerSelection + ", computer choose " + computerSelection);
	console.log("You win! " + playerSelection + " beats " + computerSelection);
	console.log("---------------------------");
}

function computerWin(playerSelection, computerSelection) {
	console.log("You choose " + playerSelection + ", computer choose " + computerSelection);
	console.log("You've lost. " + computerSelection + " beats " + playerSelection);
	console.log("---------------------------");
}


function playRound(playerSelection, computerSelection) {
	

	if (playerSelection == "rock" && computerSelection == "rock") {
		console.log("You choose " + playerSelection + ", computer choose " + computerSelection);
		console.log("Game tie.");
		console.log("---------------------------");
	}
	else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerWin(playerSelection, computerSelection);
		playerScore++;
	}
	else if (playerSelection == "paper" && computerSelection == "paper") {
		console.log("You choose " + playerSelection + ", computer choose " + computerSelection);
		console.log("Game tie.");
		console.log("---------------------------");
	}
	else if (playerSelection === "paper" && computerSelection === "rock") {
		playerWin(playerSelection, computerSelection);
		playerScore++;
	}
	else if (playerSelection == "scissors" && computerSelection == "scissors") {
		console.log("You choose " + playerSelection + ", computer choose " + computerSelection);
		console.log("Game tie.");
		console.log("---------------------------");
	}
	else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerWin(playerSelection, computerSelection);
		playerScore++;
	}
	else {
		computerScore++;
		computerWin(playerSelection, computerSelection);
	}
}

function game() {
	let totalGames = 0;

	while (totalGames < 5) {
		let playerChoice = window.prompt("Please choose Rock, paper or scissors");
		playerChoice.toLowerCase();
		const computerSelection = computerPlay().toLowerCase();
		playRound(playerChoice, computerSelection);
		totalGames++;
	}

	console.log("Games has ended.");
	console.log("Player score: " + playerScore);
	console.log("Computer score: " + computerScore);
	
	
	if (playerScore == computerScore){
		console.log("The game is a tie D:");
	}
	else if (playerScore > computerScore) {
		console.log("You win the game!");
	}
	else {
		console.log("Computer wins the game. :(")
	}
}

// we call the function Game and so 5 rounds of RPS are played.
game();
