const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

const DIRECTIONS = {
	LEFT: 37,
	TOP: 38,
	RIGHT: 39,
	BOTTOM: 40,
}
const w = canvas.clientWidth;
const h = canvas.clientHeight;
let lastTimeout;
let snake;
let xv;
let yv;
let size;
let fps;
let isGameOver;
let food;

document.addEventListener('keydown', key => {
	switch (key.keyCode) {
		case DIRECTIONS.LEFT:
			if (xv > 0) return;
			xv = -1; yv = 0;
			break;
		case DIRECTIONS.TOP:
			if (yv > 0) return;
			yv = -1; xv = 0;
			break;
		case DIRECTIONS.RIGHT:
			if (xv < 0) return;
			xv = 1; yv = 0;
			break;
		case DIRECTIONS.BOTTOM:
			if (yv < 0) return;
			yv = 1; xv = 0;
			break;
	}
});

function setup() {

	isGameOver = false;
	snake = [];
	xv = 1;
	yv = 0;
	size = 20;
	fps = 10;
	isGameOver = false;

	for (let i = 5; i--;) {
		insert(size * i, 0);
	}

	createFood();
}

function insert(x, y) {
	snake.push({ x, y });
}

function move(cell) {
	cell.x += xv * size;
	cell.y += yv * size;
	(cell.x + size > w || cell.x < 0 || cell.y + size > h || cell.y < 0) && gameOver();
}

async function gameOver() {
	isGameOver = true;
	const wantsToPlay = confirm('Game Over. Do you wanna play again?');
	if (wantsToPlay) {
		setup();
		draw();
	}
}

function isOverlap({ x, y }) {
	const head = snake[0];

	if (x >= head.x + size || head.x >= x + size) {
		return false;
	}

	if (y >= head.y + size || head.y >= y + size) {
		return false;
	}

	return true;
}

function eatItself() {
	const head = snake[0];

	for (let i = 1, length = snake.length; i < length; i++) {
		if (!(snake[i].x >= head.x + size || head.x >= snake[i].x + size) && !(snake[i].y >= head.y + size || head.y >= snake[i].y + size)) {
			return true;
		}
	}

	return false;
}

function createFood() {
	while (true) {
		food = {
			x: Math.round(Math.floor(Math.random() * w / size) * size),
			y: Math.round(Math.floor(Math.random() * h / size) * size),
		};

		console.log(food);
		if (!isOverlap(food)) break;
	}
}

function drawCell(cell, color = '#3ff6a9') {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.strokeStyle = '#fff';
	ctx.rect(cell.x, cell.y, size, size)
	ctx.fillRect(cell.x, cell.y, size, size);
	ctx.stroke();
}

// ------------------------

function draw() {
	if (isGameOver) return;

	ctx.beginPath();
	ctx.fillStyle = '#222';
	ctx.strokeStyle = '#fff';
	ctx.fillRect(0, 0, w, h);
	ctx.rect(0, 0, w, h)

	for (let i = Math.floor(w / size); i--;) {
		ctx.beginPath();
		ctx.moveTo(i * size, 0);
		ctx.lineTo(i * size, h);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(0, i * size);
		ctx.lineTo(w, i * size);
		ctx.stroke();
	}

	for (let length = snake.length, i = length - 1; i >= 0; i--) {

		if (i - 1 >= 0) {
			snake[i] = { ...snake[i - 1] };
		} else {
			move(snake[i]);
			if (eatItself()) gameOver();
		}

		drawCell(snake[i]);
	}

	if (isOverlap(food)) {
		snake.push({});
		drawCell(food);
		createFood();
	}

	drawCell(food, 'red');

	if (lastTimeout != null) clearTimeout(lastTimeout);
	lastTimeout = setTimeout(() => !isGameOver && requestAnimationFrame(draw), 1000 / fps)
}

setup();
draw();