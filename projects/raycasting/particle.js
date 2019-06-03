class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let i = 0; i < 360; i++) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    look(walls) {
        for (const ray of this.rays) {
            let record = Infinity;
            let closest = null;
            for (const wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    let d = p5.Vector.dist(this.pos, pt);
                    d = min(d, record);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }

            if (closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (const ray of this.rays) {
            ray.show();
        }
    }
}
