var t = 0;
var inc = 0.02;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    loadPixels();
    var yOff = 0;
    for (var y = 0; y < height; y++) {
        var xOff = 0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var value = noise(xOff, yOff, t) * 255;
            pixels[index + 0] = value;
            pixels[index + 1] = value;
            pixels[index + 2] = value;
            pixels[index + 3] = value;
            xOff += inc;
        }
        yOff += inc;
    }
    t += inc;
    updatePixels();
}