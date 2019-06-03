let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        const x1 = random(width);
        const x2 = random(width);
        const y1 = random(height);
        const y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    ray = new Ray(100, 200);
    particle = new Particle();
}

function draw() {
    background(0);
    for (const wall of walls) {
        wall.show();
    }

    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
        particle.update(noise(xoff) * width, noise(yoff) * height);
    } else {
        particle.update(mouseX, mouseY);
    }
    particle.show();
    particle.look(walls);

    xoff += 0.01;
    yoff += 0.01;
}
