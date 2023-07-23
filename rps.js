function getRandom() {
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
  let choice = getRandom();
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll("button");
const resultText = document.querySelector(".result");
const playerText = document.querySelector(".player > .points");
const computerText = document.querySelector(".computer > .points");
const playerImg = document.getElementById("playerImg")
const computerImg = document.getElementById("computerImg")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let computerChoice = getComputerChoice()
    let playerChoice = button.textContent.toLowerCase()
    resultText.textContent = playRound(playerChoice, computerChoice);
    playerImg.src = "imgs/" + playerChoice + ".png"
    computerImg.src =  "imgs/" + computerChoice + ".png"

  });
  button.addEventListener("click", () => {
    if (resultText.textContent.includes("Lose")) {
      computerText.textContent = computerPoints;
    } else if (resultText.textContent.includes("Win")) {
      playerText.textContent = playerPoints;
    }
  });
});

function playRound(playerSelection, computerSelection) {
  let win = "You Win! ";
  let lose = "You Lose! ";

  let paperRock = "Paper beats Rock";
  let scissorsPaper = "Scissors beats Paper";
  let rockScissors = "Rock beats Scissors";

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerPoints++;
      return lose + paperRock;
    } else {
      playerPoints++;
      return win + rockScissors;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerPoints++;
      return lose + scissorsPaper;
    } else {
      playerPoints++;
      return win + paperRock;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerPoints++;
      return lose + rockScissors;
    } else {
      playerPoints++;
      return win + scissorsPaper;
    }
  }

  // if (playerPoints >= 5 || computerPoints >= 5) {
  //   if (playerPoints > computerPoints) {
  //     resultText.textContent = `YOU WIN! Score: ${playerPoints}`;
  //   } else if (playerPoints < computerPoints) {
  //     resultText.textContent = `YOU LOSE! Score: ${playerPoints}`;
  //   }
  // }
}
