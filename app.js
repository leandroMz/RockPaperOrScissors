
// select user
const selectRock = "rock"
const selectPaper = "paper"
const selectScissors = "scissors"

//result game
const tie = 1;
const win = 2;
const lost = 3;

const piedraBtn = document.getElementById("rock")
const papelBtn = document.getElementById("paper")
const tijeraBtn = document.getElementById("scissors")
const resultText = document.getElementById("start-Text")
const resultUser = document.getElementById("userSelect")
const resultPc = document.getElementById("pcSelect")


piedraBtn.addEventListener("click", () => {
    play(selectRock);
    console.log("rock");
})
papelBtn.addEventListener("click", () => {
    play(selectPaper);
    console.log("paper");
})
tijeraBtn.addEventListener("click", () => {
    play(selectScissors);
    console.log("scissors");
})

function play(user) {
    let pc = machine()        
    const result = resultOfGame(user, pc)

    resultUser.innerHTML = user
    resultPc.innerHTML = pc


    switch (result) {
        case tie:
            resultText.innerHTML = "Tied"
            break;
        case win:
            resultText.innerHTML = "You Win!"
            break;
        case lost:
            resultText.innerHTML = "You Lost"
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