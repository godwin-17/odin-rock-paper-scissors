const buttons = document.querySelectorAll("button");

const body = document.querySelector("body");
const div = document.createElement("div");


buttons.forEach(button => {
  button.addEventListener("click", () => {

    // PLAYER
    let playerSelection = button.textContent;
    console.log("PLAYER SELECTION: ",playerSelection.toLowerCase());

    // COMPUTER
    let computerSelection = getComputerChoice();
    console.log("COMPUTER SELECTION: ",computerSelection);

    // TO SEE WHO IS THE WINNER
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));

    div.textContent = result;
    body.appendChild(div);
  });
});


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}


let playerCounter = 0;
let ComputerCounter = 0;
let result = "";


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    ComputerCounter++;
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
    ComputerCounter++;
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
    ComputerCounter++;
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


/*
function game() {
  for (let i = 0; i < 5; i++) {

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