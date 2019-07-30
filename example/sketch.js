var xOff1 = 0;
var xOff2 = 100000;


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(63);
    xOff1 += 0.01;
    xOff2 += 0.01;
    var x = noise(xOff1) * 400;
    var y = noise(xOff2) * 400;
    ellipse(x, y, 40);
}