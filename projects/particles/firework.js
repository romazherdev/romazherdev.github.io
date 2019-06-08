class Firework {

    constructor() {
        this.hu = random(255);
        this.firework = new Particle(random(width), height, this.hu, true);
        this.exploded = false;
        this.particles = [];
    }

    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.explode();
            }
        }

        for (let length = this.particles.length, i = length; i--;) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].done) {
                this.particles.splice(i, 1);
            }
        }
    }

    explode() {
        this.exploded = true;

        for (let i = 0; i < 100; i++) {
            let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
            this.particles.push(p);
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }

        for (const p of this.particles) {
            p.show();
        }
    }

    get done() {
        return this.exploded && this.particles.length === 0;
    }
}

