const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const humanScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const resultDisplay = document.querySelector("#result");
const finalResultDisplay = document.querySelector("#finalResult");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const numOfRounds = 5;

humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

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

function playRound(humanChoice, computerChoice) {
  let message = "";
  if (computerChoice === humanChoice) {
    message = `It's a TIE! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    message = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  roundsPlayed++;

  resultDisplay.textContent = `Round ${roundsPlayed}/${numOfRounds}: ${message}`;

  if (roundsPlayed === numOfRounds) {
    endGame();
  }
}

function endGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  if (humanScore > computerScore) {
    finalResultDisplay.textContent = "Congratulations! You won the Game.";
  } else if (humanScore < computerScore) {
    finalResultDisplay.textContent =
      "The computer won the game. Better luck next time ";
  } else {
    finalResultDisplay.textContent = "The game ended in a TIE!";
  }

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Play Again";
  playAgainButton.addEventListener("click", resetGame);

  playAgainButton.style.marginTop="8px"

  finalResultDisplay.appendChild(document.createElement("br"));
  finalResultDisplay.appendChild(playAgainButton);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = "";
  finalResultDisplay.textContent = "";

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

function playGame(humanChoice) {
  if (roundsPlayed >= numOfRounds) {
    return;
  }
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

rock.addEventListener("click", () => {
  playGame("rock");
});

paper.addEventListener("click", () => {
  playGame("paper");
});

scissors.addEventListener("click", () => {
  playGame("scissors");
});
