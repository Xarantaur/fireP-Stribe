"use strict";

/* <----------------------------view----------------------------> */

export function makeBoardClickable() {
  document.querySelector("#board").addEventListener("click", boardClicked);
}
export function boardClicked(event) {
  console.log(`board clicked`);
  const cell = event.target;

  if (cell.classList.contains("Cell")) {
    const col = cell.dataset.col;

    console.log(`Clicked col ${col}`);
  }
}

/* export function displayBoard() {
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
   
    

      cell.textContent = value;
      switch (value) {
        case 0:
          cell.textContent = " ";
          break;
        case 1:
          cell.textContent = "X";
          break;
        case 2:
          cell.textContent = "O";
          break;
      }
    }
  } 
} */
/* <->-------------------model --------------------------- */

/* function countNeighbours(row, col) {
  let count = 0;
  for (let y = -1; y <= 1; y++) {
    for (let x = -1; x <= 1; x++) {
       //avoid counting myself 

      if( x != 0 && y != 0 ) {
        count += readFromCell(row+y, col+x)
      }
    }
  }
  return count;
} */
