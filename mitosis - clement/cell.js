function Cell(pos, r) {
	this.pos = pos || createVector(random(width), random(height));
	this.r = r || 60;
	this.velocity = random(3, 6);
	this.dir = p5.Vector.random2D();
	this.c = color(random(100,255), 255, random(100,255));

	this.update = function() {
		if (this.velocity > 0) {
			var shootdir = this.dir.copy();
			shootdir.mult(this.velocity);
			this.velocity -= 0.2;

			if (this.velocity < 0) {
				this.velocity = 0;
			}
			this.pos.add(shootdir);
		}
		var jiggle = p5.Vector.random2D();
		this.pos.add(jiggle.mult(1.2));

		// check edges
		if (this.pos.x < 20) this.pos.x = 20;
		if (this.pos.x > width-20) this.pos.x = width-20;
		if (this.pos.y < 20) this.pos.y = 20;
		if (this.pos.y > height-20) this.pos.y = height-20;
	}

	this.display = function() {
		noStroke();
		fill(this.c);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}

	this.clicked = function(x, y) {
		var d = dist(this.pos.x, this.pos.y, x, y);
		return (d <= this.r);
	}

	this.divide = function() {
		var newPos = this.pos.copy();
		return new Cell(newPos, this.r*0.8);
	}
}