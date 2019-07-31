var scl = 20;
var inc = 0.02;
var cols, rows;

function setup() {
    createCanvas(400, 400);
    col = floor(width / scl);
    row  = floor(height / scl);
}

function draw() {
    var yOff = 0;
    for (y = 0; y < row; y++) {
        var xOff = 0;
        for (x = 0; x < col; x++) {
            var value = random(255);
            fill(value);
            rect(x * scl, y * scl, scl, scl);
            xOff += inc;
        }
        yOff += inc;
    }
}