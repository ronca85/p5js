window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		ship = particle.create(width / 2, height / 2, 0, 0),
		thrust = vector.create(0, 0),
		angle = 0,
		turningLeft = false,
		turningRight = false,
		thrusting = false;

	ship.friction = 0.99;

	update();

	document.body.addEventListener("keydown", function(event) {
		// console.log(event.keyCode);
		switch(event.keyCode) {
			case 38: // up
				thrusting = true;
				break;
			case 37: // left
				turningLeft = true;
				break;
			case 39: // right
				turningRight = true;
				break;
			default:
				break;
		}
	});
	document.body.addEventListener("keyup", function(event) {
		// console.log(event.keyCode);
		switch(event.keyCode) {
			case 38: // up
				thrusting = false;
				break;
			case 37: // left
				turningLeft = false;
				break;
			case 39: // right
				turningRight = false;
				break;
			default:
				break;
		}
	});

	function update() {
		context.clearRect(0, 0, width, height);

		if (turningLeft) {
			angle -= 0.05;
		}
		if (turningRight) {
			angle += 0.05;
		}

		thrust.setAngle(angle);

		if (thrusting) {
			thrust.setLength(0.1);
		} else {
			thrust.setLength(0);
		}

		ship.accelerate(thrust);
		ship.update();

		context.save();
		context.translate(ship.position.getX(), ship.position.getY());
		context.rotate(angle);

		if (thrusting) {
			context.beginPath();
			context.moveTo(-28, 15);
			context.lineTo(-26, 15);
			context.lineTo(-26, 20);
			context.lineTo(-28, 20);
			context.lineTo(-28, 15);
			context.moveTo(-28, -15);
			context.lineTo(-26, -15);
			context.lineTo(-26, -20);
			context.lineTo(-28, -20);
			context.lineTo(-28, -15);
			context.fillStyle = "#666666";
			context.fill();
		}
		context.beginPath();
		context.moveTo(25, -15);
		context.lineTo(-25, -15);
		context.lineTo(-25, 15);
		context.lineTo(25, 15);
		context.lineTo(25, -15);
		
		// context.stroke();
		context.fillStyle = "#ffddaa";
		context.fill();

		context.beginPath();
		context.moveTo(25, -15);
		context.lineTo(25, -20);
		context.lineTo(15, -20);
		context.lineTo(15, -15);
		context.lineTo(25, -15);

		context.moveTo(25, 20);
		context.lineTo(25, 15);
		context.lineTo(15, 15);
		context.lineTo(15, 20);
		context.lineTo(25, 20);

		context.moveTo(-25, -20);
		context.lineTo(-25, -15);
		context.lineTo(-15, -15);
		context.lineTo(-15, -20);
		context.lineTo(-25, -20);

		context.moveTo(-25, 20);
		context.lineTo(-25, 15);
		context.lineTo(-15, 15);
		context.lineTo(-15, 20);
		context.lineTo(-25, 20);

		context.fillStyle = "#000000";
		context.fill();

		context.restore();

		if (ship.position.getX() > width) {
			ship.position.setX(0);
		}
		if (ship.position.getX() < 0) {
			ship.position.setX(width);
		}
		if (ship.position.getY() > height) {
			ship.position.setY(0);
		}
		if (ship.position.getY() < 0) {
			ship.position.setY(height);
		}
		
		requestAnimationFrame(update);
	}
};