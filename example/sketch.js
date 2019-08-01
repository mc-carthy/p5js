var scl = 20;
var inc = 0.1;
var t = 0;
var cols, rows;

var particles = [];
var flowfield;

function setup() {
    createCanvas(600, 600);
    col = floor(width / scl);
    row  = floor(height / scl);
    flowfield = new Array(col * row);

    for (var i = 0; i < 100; i++) {
        particles[i] = new Particle();
    }

    createFlowfield();
}

function createFlowfield() {
    var yOff = 0;
    for (y = 0; y < row; y++) {
        var xOff = 0;
        for (x = 0; x < col; x++) {
            var index = x + y * col
            var value = noise(xOff, yOff, t);
            var v = p5.Vector.fromAngle(value * TWO_PI);
            flowfield[index] = v; 
            xOff += inc;
        }
        yOff += inc;
    }
}

function drawFlowfield() {
    for (y = 0; y < row; y++) {
        for (x = 0; x < col; x++) {
            v = flowfield[x + y * col];
            stroke(0, 50);
            push();
                translate(x * scl + scl / 2 , y * scl + scl / 2);
                rotate(v.heading());
                line(0, 0, scl / 2, 0);
            pop();
        }
    }
}

function draw() {
    background(255);
    drawFlowfield();
    // t += 0.01

    for (var i = 0; i <particles.length; i++) {
        particles[i].follow(flowfield); 
        particles[i].update();
        particles[i].show();
    }
}