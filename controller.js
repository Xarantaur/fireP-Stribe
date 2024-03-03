import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", start);
let currentplayer = 1;

export function start() {
  console.log("javascript køre");
  view.makeBoardClickable();
  /* view.displayBoard(); */
}

export function nextTurn() {
  if (!gameOver) {
    if (currentplayer === 1) {
      setTimeout(() => {
        currentplayer = 2;
        /*  chickenDinner(); */
        if (!gameOver) {
          /* computerTurn(); */
          // computer turn slået fra fordi hardkodet loop ikke matcher board
        }
      }, 1000);
    } else if (currentplayer === 2) {
      currentplayer = 1;
      /*  chickenDinner(); */
      if (!gameOver) {
        playerturn();
      }
    }
  }
}

function playerturn() {}
// computer turn slået fra
/* function computerTurn() {
  const availableCells = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (readFromCell(i, j) === 0) {
        availableCells.push([i, j]);
      }
    }
  }

  if (availableCells.length === 0) {
    console.log("game over! no available cells left");
  } else {
    const index = Math.floor(Math.random() * availableCells.length);
    const [row, col] = availableCells[index];
    selectCell(row, col);
  }
} */
