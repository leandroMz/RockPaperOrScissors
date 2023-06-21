const selectRock = "rock"
const selectPaper = "paper"
const selectScissors = "scissors"
const tie = 1;
const win = 2;
const lost = 3;
let userWins = 0;
let pcWins = 0;
let ties = 0;
const piedraBtn = document.getElementById("rock")
const papelBtn = document.getElementById("paper")
const tijeraBtn = document.getElementById("scissors")
const resultText = document.getElementById("start-Text")
const resultUser = document.getElementById("userSelect")
const resultPc = document.getElementById("pcSelect")

piedraBtn.addEventListener("click", () => {
  const result = play(selectRock);
  if (result === win) {
    playerScore += 1;
  } else if (result === lost) {
    computerScore += 1;
  } else if (result === tie) {
    tiesScore += 1;
  }
  updateScores();
  checkWinner();
})
papelBtn.addEventListener("click", () => {
  const result = play(selectPaper);
  if (result === win) {
    playerScore += 1;
  } else if (result === lost) {
    computerScore += 1;
  } else if (result === tie) {
    tiesScore += 1;
  }
  updateScores();
  checkWinner();
})
tijeraBtn.addEventListener("click", () => {
  const result = play(selectScissors);
  if (result === win) {
    userWins+=1;
  } else if (result === lost) {
    pcWins += 1;
  } else if (result === tie) {
    ties += 1;
  }
  updateScores();
  checkWinner();
})
function checkWinner() {
  if (userWins === 5) {
    resultText.innerHTML = "Felicidades, Ganaste 5 veces seguidas!";
  } else if (pcWins === 5) {
    resultText.innerHTML = "Lo siento, perdiste 5 veces seguidas.";
  }
}

function play(user) {
  let pc = machine();        
  const result = resultOfGame(user, pc);
  resultUser.innerHTML = `<img class="img-result" src='/images/${user}.png' alt='${user}'>`;
  resultPc.innerHTML = `<img class="img-result-2" src='/images/${pc}.png' alt='${pc}'>`;

  switch (result) {
      case tie:
          resultText.innerHTML = "Tied";
          ties++;
          break;
      case win:
          resultText.innerHTML = "You Win!";          
          userWins++;
          break;
      case lost:
          resultText.innerHTML = "You Lost";
          pcWins++;
          break;
      default:
          break;
  }
}

function machine() {
    let number = parseInt(Math.random() * 3 + 1)
    switch (number) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
        default:
            break;
    }
}

function resultOfGame(user, pc) {
    if (user === pc) {
        return tie
    } else if (user === selectRock) {
        if (pc === selectPaper) {
            return lost
        }
        if (pc === selectScissors) {
            return win
        }
    } else if (user === selectPaper) {
        if (pc === selectRock) {
            return win
        }
        if (pc === selectScissors) {
            return lost
        }    
    } else if (user === selectScissors) {
        if (pc === selectRock) {
            return lost
        }
        if (pc === selectPaper) {
            return win
        }
    }
}
let playerScore = 0;
let computerScore = 0;
let tiesScore = 0;

const scoresElement = document.getElementById("scores");

const resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener("click", () => {
  userWins = 0;
  pcWins = 0;
  ties = 0;
  resultText.innerHTML = "START!";
  resultUser.innerHTML = "-";
  resultPc.innerHTML = "-";
  updateScores();
});

function updateScores() {
  document.getElementById("scores").innerHTML = `Player: ${userWins} | Computer: ${pcWins} | ties: ${ties}`;
}