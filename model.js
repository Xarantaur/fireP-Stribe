import * as controller from "./controller.js";

let gameOver = false;
let GRID_WIDTH = 7;
let GRID_HEIGHT = 6;

const board = document.querySelector("#board");
board.style.setProperty("--GRID_WIDTH", GRID_WIDTH);
const cells = Array.from(board.querySelectorAll(".cell"));

const boardModel = [];
for (let i = 0; i < GRID_HEIGHT * GRID_WIDTH; i++) {
  boardModel.push("0");
}

function findRow(index) {
  console.log(Math.floor(index / GRID_WIDTH));
  return Math.floor(index / GRID_WIDTH);
}

function findCol(index) {
  console.log(index % GRID_WIDTH);
  return index % GRID_WIDTH;
}

function findIndex(row, col) {
  console.log(row * GRID_WIDTH + col);
  return Math.floor(row * GRID_WIDTH + col);
}

/* for (let i = 0; i < GRID_HEIGHT * GRID_WIDTH; i++) {
  board.push("0");
} */

export function writeToCell(index, value) {
  board[index] = value;
}

/* export function writeToCell(row, col, value) {
  grid[row][col] = value;
} */
function writeToColumn(col) {
  grid[col] = value;
}

export function readFromCell(row, col) {
  return grid[row][col];
}

function selectRow(row) {}
export function selectCell(row, col) {
  if (readFromCell(row, col) === 0) {
    writeToCell(row, col, currentplayer);
    console.table(grid);
    displayBoard();
    controller.nextTurn();
    return true;
  } else {
    return false;
  }
} /* 
function chickenDinner() {
  // Check rows for winning conditions
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] === 1 && grid[i][1] === 1 && grid[i][2] === 1) {
      declareWinner(1); // Player 1 wins
      gameOver = true;
      return;
    }
    if (grid[i][0] === 2 && grid[i][1] === 2 && grid[i][2] === 2) {
      declareWinner(2); // Player 2 wins
      gameOver = true;
      return;
    }
  }

  // Check columns for winning conditions
  for (let j = 0; j < 3; j++) {
    if (grid[0][j] === 1 && grid[1][j] === 1 && grid[2][j] === 1) {
      declareWinner(1); // Player 1 wins
      gameOver = true;
      return;
    }
    if (grid[0][j] === 2 && grid[1][j] === 2 && grid[2][j] === 2) {
      declareWinner(2); // Player 2 wins
      gameOver = true;
      return;
    }
  }

  // Check diagonals for winning conditions
  if (
    (grid[0][0] === 1 && grid[1][1] === 1 && grid[2][2] === 1) ||
    (grid[0][2] === 1 && grid[1][1] === 1 && grid[2][0] === 1)
  ) {
    declareWinner(1); // Player 1 wins
    gameOver = true;
    return;
  }
  if (
    (grid[0][0] === 2 && grid[1][1] === 2 && grid[2][2] === 2) ||
    (grid[0][2] === 2 && grid[1][1] === 2 && grid[2][0] === 2)
  ) {
    declareWinner(2); // Player 2 wins
    gameOver = true;
    return;
  }

  // If no winning condition is met, and the grid is full, declare a tie
  if (isGridFull()) {
    declareTie();
    return;
  }
}

function declareWinner(player) {
  // Display a message indicating the winner
  console.log("Player " + player + " wins!");

  // You can add more code here to stop the game or perform other actions
}

function declareTie() {
  // Display a message indicating a tie
  console.log("It's a tie!");
  gameOver = true;
  // You can add more code here to stop the game or perform other actions
}
function isGridFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === 0) {
        return false; // If any cell is empty, the grid is not full
      }
    }
  }
  return true; // If no empty cells are found, the grid is full
} */
