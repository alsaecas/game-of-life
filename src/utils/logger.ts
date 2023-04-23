import chalk from "chalk";
import { Board } from "../types/Game.type";
export function printBoard(board: Board) {
  let boardString = "";
  for (let row of board) {
    for (let cell of row) {
      boardString += cell === 0 ? chalk.bgWhite("   ") : chalk.bgBlue("   ");
    }
    boardString += "\n";
  }
  console.log(boardString);
}
