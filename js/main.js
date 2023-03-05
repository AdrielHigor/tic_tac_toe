const player1 = 'O';
const player2 = 'X';
let currentPlayer = player1;
let endGame = false;

const restartButton = document.getElementById('restart');
const board = document.getElementsByClassName('board');
const buttons = document.getElementsByClassName('button');
const gameState = [null, null, null, null, null, null, null, null, null];


const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function isBoardFull() {
    return !gameState.includes(null);
}

function checkForWin() {
    for (combo of winningCombos) {
        let comboCounter = 0

        for (index of combo) {
            if (gameState[index] === currentPlayer) {
                comboCounter += 1
            }
        }

        if (comboCounter === 3) {
            return true
        }
    }

    return false;
}

function gameOver() {
    return !!checkForWin() || !!isBoardFull()
}

restartButton.addEventListener('click', () => {
    endGame = false;
    currentPlayer = player1;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = null;
        gameState[i] = null;
    }

    restartButton.style.visibility = 'hidden'
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (!endGame && gameState[i] === null) {
            buttons[i].textContent = currentPlayer;
            gameState[i] = currentPlayer;

            if (checkForWin()) {
                alert(`${currentPlayer} venceu!`);
            } else if (isBoardFull()) {
                alert("Temos um empate!")
            }

            endGame = gameOver();
            currentPlayer = (currentPlayer === player1) ? player2 : player1;
        }

        if (endGame) {
            restartButton.style.visibility = 'visible'
        }
    })
}