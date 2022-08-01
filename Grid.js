const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;


export default class Grid {
    //making cells private is so that it can be only accesible in grid class
    #cells
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size",GRID_SIZE)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`)
        this.#cells = createCellElements(gridElement).map((cellElement, index) => {
            return new Cell(cellElement, index % GRID_SIZE, Math.floor(index / GRID_SIZE))
        })

    }

    get #emptyCells() {
        return this.#cells.filter(cell => cell.tile == null)
    }
    // it will return which ever cell is empty
    randomEmptyCell() {
        const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
        return this.#emptyCells[randomIndex]
    }
}
class Cell {
   #cellElement
   #x
   #y
   #tile

    constructor(cellElement, x,y) {
        this.#cellElement = cellElement
        this.#x = x
        this.#y = y
    }
    get tile() {
        return this.#tile
    }
    
    set tile(value) {
        this.#tile = value
        if(value == null) return
        this.#tile.x = this.#x
        this.#tile.y = this.#y
    }
}

function createCellElements(gridElement) {
    const cells = []
    for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cells.push(cell)
        gridElement.append(cell)
    }

    return cells
}