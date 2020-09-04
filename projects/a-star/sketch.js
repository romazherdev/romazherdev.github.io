const params = new URLSearchParams(window.location.search);

const walls = params.get('walls') || .3;
const cols = params.get('size') || 50;
const rows = params.get('size') || 50;
const grid = new Array(cols);
const wallsInput = document.getElementById('walls');
const sizeInput = document.getElementById('size');

wallsInput.value = walls;
sizeInput.value = cols;

Array.prototype.remove = function (obj) {
  const index = this.indexOf(obj);

  return this.splice(index, 1);
};

let openSet = [];
let closedSet = [];
let start;
let end;
let w;
let h;
let path = [];

class Spot {
  f = 0;
  g = 0;
  h = 0;
  i;
  j;
  neighbours = [];
  previous;
  wall = random(1) < walls;

  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  show(col) {
    // fill(col);

    if (this.wall) {
      fill(0);
      noStroke();
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }

    // rect(this.i * w, this.j * h, w, h);
  }

  addNeighbours() {
    const i = this.i;
    const j = this.j;

    if (i < cols - 1) {
      this.neighbours.push(grid[i + 1][j]);
    }

    if (i > 0) {
      this.neighbours.push(grid[i - 1][j]);
    }

    if (j < rows - 1) {
      this.neighbours.push(grid[i][j + 1]);
    }

    if (j > 0) {
      this.neighbours.push(grid[i][j - 1]);
    }

    if (i > 0 && j > 0) {
      this.neighbours.push(grid[i - 1][j - 1]);
    }

    if (i < cols - 1 && j > 0) {
      this.neighbours.push(grid[i + 1][j - 1]);
    }

    if (i > 0 && j < rows - 1) {
      this.neighbours.push(grid[i - 1][j + 1]);
    }

    if (i < cols - 1 && j < rows - 1) {
      this.neighbours.push(grid[i + 1][j + 1]);
    }
  }
}

function heuristic(a, b) {
  // return abs(a.i - b.i) + abs(a.j - b.j);
  return dist(a.i, a.j, b.i, b.j);
}

function noSolution() {
    console.log("No solution");
    const text = document.querySelector('#text');
    text.classList.remove('hidden');
    text.removeAttribute('aria-hidden');
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("canvas");

  w = width / cols;
  h = height / rows;

  // Making a 2D array
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbours();
    }
  }

  // initialize path data
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  start.wall = false;
  end.wall = false;

  openSet.push(start);
}

function draw() {
  let current;

  if (openSet.length > 0) {
    let winner = 0;

    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }

    current = openSet[winner];

    if (current === end) {
      noLoop();
      console.log("DONE");
    }

    openSet.remove(current);
    closedSet.push(current);

    const neighbours = current.neighbours;

    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];

      if (!closedSet.includes(neighbour) && !neighbour.wall) {
        const tempG = current.g + 1;
        let newPath = false;

        if (openSet.includes(neighbour)) {
          if (tempG < neighbour.g) {
            neighbour.g = tempG;
            newPath = true;
          }
        } else {
          neighbour.g = tempG;
          newPath = true;
          openSet.push(neighbour);
        }

        if (newPath) {
          neighbour.h = heuristic(neighbour, end);
          neighbour.f = neighbour.g + neighbour.h;
          neighbour.previous = current;
        }
      } //
    }
  } else {
    // no solution
    noSolution();
    noLoop();
    return;
  }

  background(255);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  closedSet.forEach((spot) => {
    spot.show(color(255, 0, 0));
  });

  openSet.forEach((spot) => {
    spot.show(color(0, 255, 0));
  });

  // find the path
  let temp = current;
  path = [temp];

  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }

  for (let i = 0; i < path.length; i++) {
    path[i].show(color(0, 0, 255));
  }

  noFill();
  stroke(255, 0, 200);
  strokeWeight(w / 2);
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
  }
  endShape();
}


function refresh() {
    location.href = `${location.href.split('?')[0]}?size=${sizeInput.value}&walls=${wallsInput.value}`
}