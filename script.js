//get the computer's choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  let answer = prompt("Enter Rock, Paper or Scissors!");
  return answer.toLowerCase();
}
