var inc = 0.01;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    loadPixels();
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var index = (x + y * width) * 4;
            var value = random(255);
            pixels[index + 0] = value;
            pixels[index + 1] = value;
            pixels[index + 2] = value;
            pixels[index + 3] = value;
        }
    }
    updatePixels();
}