var wave;
var button;
var slider;
var playing = false;

var inc = 0.1;
var start = 0;

function setup() {
	createCanvas(400, 400);
	wave = new p5.Oscillator();
	slider = createSlider(0.0001, 0.05, 0.01, 0.001);

	wave.setType('square');
	wave.start();
	wave.amp(0);

	button = createButton('play/pause');
	button.mousePressed(toggle);
}
function draw() {
	background(50);
	stroke(255);
	noFill();

	inc = slider.value();

	if (playing) {
		beginShape();
		var xoff = start;
		for (var x = 0; x < width; x++) {
			stroke(255);
			var y = noise(xoff)*height;
			vertex(x, y);

			xoff += inc;
		}
		endShape();

		start += inc;

		// noLoop();

		wave.freq(y);
	} else {
		background(50);
	}
}

function toggle() {
	if (!playing) {
		wave.amp(0.5);
		playing = true;
	} else {
		wave.amp(0);
		playing = false;
	}
}