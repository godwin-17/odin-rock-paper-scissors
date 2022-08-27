function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  console.log(choices[Math.floor(Math.random() * choices.length)]);
  return choices[Math.floor(Math.random() * choices.length)];
}

