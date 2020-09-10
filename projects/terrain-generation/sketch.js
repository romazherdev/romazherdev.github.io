let cols, rows;
const w = 1200;
const h = 900;
const scl = 20;

const terrain = [];

let flying = 0;
let rotate = 3;

const input = document.querySelector('input[type=range]');

input.addEventListener('input', () => {
  rotate = input.value;
});

function setup() {
  const canvas = createCanvas(600, 600, WEBGL);
  canvas.parent("canvas");

  cols = floor(w / scl);
  rows = floor(h / scl);
}

function draw() {
  flying -= 0.1;

  let xoff = 0;
  for (let x = 0; x < cols; x++) {
    let yoff = flying;
    terrain[x] = new Array(cols);

    for (let y = 0; y < rows; y++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      yoff += 0.2;
    }

    xoff += 0.2;
  }


  background(0);
  stroke(0, 255, 100);
  noFill();

  rotateX(PI / rotate);
  translate(-w / 2, -h / 2);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols - 1; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      // rect(x * scl, y * scl, scl, scl);
    }
    endShape();
  }
}
