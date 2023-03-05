# Tic Tac Toe Game

This is a simple implementation of Tic Tac Toe game using HTML, CSS, and JavaScript. 

## Game Rules
- The game is played on a 3x3 grid
- There are two players: Player 1 and Player 2
- Player 1 is assigned 'O' and Player 2 is assigned 'X'
- Players take turns putting their marks in empty squares
- The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins the game
- If all squares are filled and no player has won, the game is a draw

## How to play
- Clone the repository to your local machine
- Open the `index.html` file in your browser
- Start playing by clicking on any square on the board
- When a player wins or the game is a draw, a message will be displayed
- Click the restart button to start a new game

## Code Structure
- The game board is represented using an array called `gameState`
- The `checkForWin()` function checks the `gameState` against the `winningCombos` array to see if any player has won
- The `isBoardFull()` function checks if all squares on the board have been filled
- The `gameOver()` function returns true if any player has won or the board is full
- When a square is clicked, the `gameState` is updated with the current player's mark and the `checkForWin()` and `isBoardFull()` functions are called to check if the game is over
- If the game is over, a message is displayed and the restart button is made visible
- Clicking the restart button resets the game

## Code Dependencies
This project has no external dependencies.
