function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 5;

    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
        this.acc.mult(0);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.follow = function(flowfield) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var force = flowfield[x + y * col];
        this.applyForce(force);
    }

    this.show = function() {
         stroke(0);
         strokeWeight(3);
         point(this.pos.x, this.pos.y);
         strokeWeight(1);
    }
}