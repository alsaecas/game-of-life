import chalk from "chalk";
import { Board } from "./types/Game.type";

function printBoard(board: Board) {
  let boardString = "";
  for (let row of board) {
    for (let cell of row) {
      boardString += cell === 0 ? chalk.bgWhite("   ") : chalk.bgBlue("   ");
    }
    boardString += "\n";
  }
  console.log(boardString);
}

printBoard([
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]);
