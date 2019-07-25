var xOff = 0;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(63);
    xOff += 0.01;
    var x = noise(xOff) * 400;
    ellipse(x, 200, 40);
}