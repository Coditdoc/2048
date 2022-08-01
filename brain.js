import Grid from "./Grid.js";
import Tile from "./Tile.js";

const board = document.getElementById("holder");

const grid = new Grid(board) 
 grid.randomEmptyCell().tile = new Tile(board)
 grid.randomEmptyCell().tile = new Tile(board)

