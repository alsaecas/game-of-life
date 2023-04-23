import { Game } from "./core/Game";
import { printBoard } from "./utils/logger";

// Create a new game with the start status
const game = new Game([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);

// Execute X ticks to simulate the evolution of the game
for (let i = 0; i < 10; i++) {
  // use print board to visualize the status of the game after every tick
  printBoard(game.board);
  game.tick();
}
