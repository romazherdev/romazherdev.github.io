function updateCanvasSize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function background(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
}

function setup() {
    window.$ = document.querySelector.bind(document);
    window.colors = {
        background: '#e6e6fa',
        rain: '#8a2be2',
    };

    window.rainControl = $('#rainControl');
    window.bgControl = $('#bgControl');

    rainControl.value = colors.rain;
    bgControl.value = colors.background;

    rainControl.addEventListener('input', () => {
        colors.rain = rainControl.value;
    });
    bgControl.addEventListener('input', () => {
        colors.background = bgControl.value
    });

    window.canvas = $('#canvas');
    updateCanvasSize();

    window.width = canvas.clientWidth;
    window.height = canvas.clientHeight;
    window.ctx = canvas.getContext('2d');
    window.count = 500;
    window.drops = [];
    
    for (let i = 0; i < count; i++) {
        drops.push(new Drop(
            random(0, width),
            random(-height, -50),
            random(0, 20),
            ));
    }
}

function draw() {
    window.width = canvas.clientWidth;
    window.height = canvas.clientHeight;

    background(colors.background);

    drops.forEach(d => {
        d.fall();
        d.show();
    });

    requestAnimationFrame(draw);
}

document.addEventListener('DOMContentLoaded', () => {
    setup();
    draw();
});

window.addEventListener('resize', () => updateCanvasSize());