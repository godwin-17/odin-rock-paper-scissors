const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    let playerSelection = button.textContent;
    console.log("PLAYER SELECTION: ",playerSelection.toLowerCase());

    let computerSelection = getComputerChoice();
    console.log("COMPUTER SELECTION: ",computerSelection);
  });
});


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

/*
let playerCounter = 0;
let ComputerCounter = 0;


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    ComputerCounter++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerCounter++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw";

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    ComputerCounter++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerCounter++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw";
  
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    ComputerCounter++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerCounter++;
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

function getWinner() {
  if (playerCounter > ComputerCounter) {
    alert("You are the winner of the game!");
  } else if (playerCounter < ComputerCounter) {
    alert("The Computer is the winner of the game!");
  } else {
    alert("No winner. It's a draw!");
  }
}
*/