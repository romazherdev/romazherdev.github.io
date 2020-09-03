class Drop {
    x;
    y;
    z;
    ySpeed;
    length;
    gravity;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.ySpeed = Math.max(1, z)
        this.length = Math.max(10, z);
        this.gravity = Math.min(Math.max(0.2, z), 0.2);
    }

    fall() {
        this.y += this.ySpeed;
        this.ySpeed += this.gravity;
        
        if (this.y > height) {
            this.ySpeed = Math.max(1, this.z);
            this.y = random(-200, -100);
            this.x = random(0, width);
        }
    }

    show() {
        ctx.fillStyle = colors.rain;
        ctx.fillRect(this.x,  this.y, this.z > 3 ? 3 : this.z < 1 ? 1 : this.z, this.length);
    }
}
