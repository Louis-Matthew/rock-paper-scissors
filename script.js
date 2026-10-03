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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("Tie!!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win!, Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose!, Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win!, Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose!, Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose!, Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win!, Scissors beats Paper");
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
