let cols;
let rows;
const w = 40;
const h = w;
const grid = [];
let current;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / h);
  // frameRate(5);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(51);

  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  const next = current.checkNeighbours();

  if (next) {
    next.visited = true;
    current = next;
  }
}

class Cell {
  walls = [true, true, true, true];
  visited = false;

  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  show() {
    const x = this.i * w;
    const y = this.j * h;
    stroke(255);

    // top
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    // right
    if (this.walls[1]) {
      line(x + w, y, x + w, y + h);
    }
    // bottom
    if (this.walls[2]) {
      line(x + w, y + h, x, y + h);
    }
    // left
    if (this.walls[3]) {
      line(x, y + h, x, y);
    }

    if (this.visited) {
      fill(255, 0, 255, 100);
      rect(x, y, x + w, y + h);
    }
  }

  checkNeighbours() {
    const neighbours = [];
    const i = this.i;
    const j = this.j;

    const top = grid[index(i, j - 1)];
    const right = grid[index(i + 1, j)];
    const bottom = grid[index(i, j + 1)];
    const left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbours.push(top);
    }

    if (right && !right.visited) {
      neighbours.push(right);
    }

    if (bottom && !bottom.visited) {
      neighbours.push(bottom);
    }

    if (left && !left.visited) {
      neighbours.push(left);
    }

    if (neighbours.length > 0) {
      const r = floor(random(0, neighbours.length));

      return neighbours[r];
    } else {
      return undefined;
    }
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }

  return i + j * cols;
}
