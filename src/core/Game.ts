import { Board } from "../types/Game.type";

export class Game {
  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  /**
   * Updates the game board according to the rules of Conway's Game of Life.
   */
  tick() {
    // Map over each cell in the board and update its state
    this.board = this.board.map((row, y) => {
      return row.map((cell, x) => {
        // Count the number of live neighbors for the current cell
        let liveNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dy === 0 && dx === 0) continue;
            liveNeighbors += this.board?.[y + dy]?.[x + dx] || 0;
          }
        }
        // Any live cell with two or three live neighbors lives on to the next generation.
        if (cell && [2, 3].includes(liveNeighbors)) return 1;
        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if (!cell && liveNeighbors === 3) return 1;
        // All other possibilities the cell dies
        return 0;
      });
    });
  }
}
