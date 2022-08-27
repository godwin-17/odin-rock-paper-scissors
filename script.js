function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw";

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw";
  
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It's a draw";
  }

}

function game() {
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors");

    let computerSelection = getComputerChoice();

    alert(playRound(playerSelection.toLowerCase(), computerSelection));
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));

  }
}

game();