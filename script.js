const buttons = document.querySelectorAll("button");

const body = document.querySelector("body");
const div = document.createElement("div");
const score = document.createElement("div");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    let playerSelection = button.textContent;
  
    let computerSelection = getComputerChoice();
    
    playRound(playerSelection.toLowerCase(), computerSelection);

    div.textContent = result;
    score.textContent = `PLAYER ${playerCounter} - COMPUTER ${computerCounter}`;
    div.appendChild(score);
    body.appendChild(div);

    if (playerCounter === 5 || computerCounter === 5) {
      getWinner();
    }

  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}


let playerCounter = 0;
let computerCounter = 0;
let result = "";


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerCounter++;
    result = "You Lose! Paper beats Rock";
    return result;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerCounter++;
    result = "You Win! Rock beats Scissors";
    return result;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    result = "It's a draw";
    return result;

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerCounter++;
    result = "You Lose! Scissors beats Paper";
    return result;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerCounter++;
    result = "You Win! Paper beats Rock";
    return result;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    result = "It's a draw";
    return result;
  
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerCounter++;
    result = "You Lose! Rock beats Scissors";
    return result;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerCounter++;
    result = "You Win! Scissors beats Paper";
    return result;
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    result = "It's a draw";
    return result;
  }
}

function getWinner() {
  if (playerCounter === 5) {
    div.append("The Player is the winner!");
    disableButtons();
  } else if (computerCounter === 5) {
    div.append("The Computer is the winner!");
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}