var startX = 0;
var inc = 0.01;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(63);
    beginShape();
    noFill();
    stroke(255);
    var xOff = startX;
    for (var x = startX; x < width; x++) {
        // point(x, random(height));
        var y = noise(xOff) * height;
        vertex(x, y);
        xOff += inc ;
    }
    startX += inc;
    endShape();
    // noLoop();
}