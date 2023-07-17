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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let win = "You Win! ";
  let lose = "You Lose! ";

  let paperRock = "Paper beats Rock";
  let scissorsPaper = "Scissors beats Paper";
  let rockScissors = "Rock beats Scissors";

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return lose + paperRock;
    } else {
      return win + rockScissors;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "Scissors") {
      return lose + scissorsPaper;
    } else {
      return win + paperRock;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return lose + rockScissors;
    } else {
      return win + scissorsPaper;
    }
  }
}

function game() {
  let count = 0;
  let playerPoints = 0;
  let computerPoints = 0;

  while (count < 5) {
    let playerSel = prompt("Your Choice?");
    let computerSel = getComputerChoice();

    if (
      playerSel === "rock" ||
      playerSel === "scissors" ||
      playerSel === "paper"
    ) {
      let round = playRound(playerSel, computerSel);
      if (round.includes("Win")) {
        playerPoints++;
        count++;
      } else if (round.includes("Lose")) {
        computerPoints++;
        count++;
      }
      console.log(round);
    } else if (playerSel === null) {
      break;
    } else {
      alert("That is not part of the game");
    }
  }

  if (count === 5) {
    if (playerPoints > computerPoints) {
      console.log(`YOU WIN! Score: ${playerPoints}`);
    } else if (playerPoints < computerPoints) {
      console.log(`YOU LOSE! Score: ${playerPoints}`);
    }
  }
}

game();
