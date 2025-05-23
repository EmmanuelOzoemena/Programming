let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
  */

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// }
const autoPlayButton = document.querySelector(".js-auto-play-button");

autoPlayButton.addEventListener("click", () => {
  autoPlay();
});

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();

      playGame(playerMove);
    }, 1500);

    autoPlayButton.innerHTML = "Stop Playing";

    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    autoPlayButton.innerHTML = "Auto Play";
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  } else if (event.key === "a") {
    autoPlay();
  }
  else if (event.key === "Backspace") {
    showResetConfirmation()
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You loss.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You loss.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You loss.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You loss.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
<img class="move-icon" src="../../assets/${playerMove}-emoji.png" alt="${playerMove}-emoji" />
<img
  class="move-icon"
  src="../../assets/${computerMove}-emoji.png"
  alt="${computerMove}-emoji"
/>
Computer`;
}

const resetScore = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
};

function showResetConfirmation() {
  document.querySelector(".confirmation-message").innerHTML = `
    Are you sure you want to reset the score?

    <button class="confirmation-button js-yes-button">Yes</button>

    <button class="confirmation-button js-no-button">No</button>
  `;

  document.querySelector(".js-yes-button").addEventListener("click", () => {
    resetScore();
    hideResetConfirmation();
  });

  document.querySelector(".js-no-button").addEventListener("click", () => {
    hideResetConfirmation();
  });
}

const resetScoreButton = document.querySelector(".js-reset-score-button");

resetScoreButton.addEventListener("click", () => {
  showResetConfirmation();
});

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function hideResetConfirmation() {
  document.querySelector(".confirmation-message").innerHTML = "";
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
