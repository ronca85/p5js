var cells = [];

function setup() {
	createCanvas(600, 600);
	cells.push(new Cell());
	cells.push(new Cell());
	cells.push(new Cell());
}

function draw() {
	background(50);
	for(var i = cells.length - 1; i >= 0; i--) {
		cells[i].update();
		cells[i].display();
	}
}

function mousePressed() {
	for (var i = cells.length - 1; i >= 0; i--) {
		if (cells[i].clicked(mouseX, mouseY)) {
			var CellA = cells[i].divide();
			var CellB = cells[i].divide();
			var CellC = cells[i].divide();
			cells.splice(i, 1);
			cells.push(CellA);
			cells.push(CellB);
			cells.push(CellC);
			return;
		}
	}
}