var scl = 20;
var inc = 0.1;
var t = 0;
var cols, rows;

var particles = [];

function setup() {
    createCanvas(600, 600);
    col = floor(width / scl);
    row  = floor(height / scl);
    for (var i = 0; i < 100; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    background(255);
    var yOff = 0;
    for (y = 0; y < row; y++) {
        var xOff = 0;
        for (x = 0; x < col; x++) {
            var value = noise(xOff, yOff, t);
            var v = p5.Vector.fromAngle(value * TWO_PI);
            stroke(0);
            push();
                translate(x * scl + scl / 2 , y * scl + scl / 2);
                rotate(v.heading());
                line(0, 0, scl / 2, 0);
            pop();
            xOff += inc;
        }
        yOff += inc;
    }
    t += 0.01

    for (var i = 0; i <particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
}