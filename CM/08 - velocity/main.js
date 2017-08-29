window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particles = [],
		numParticles = 100;

	for(var i = 0; i < numParticles; i++) {
		var randomSpeed = Math.random() * 4 + 1,
			randomAngle = Math.random() * Math.PI * 2;
		particles.push(particle.create(width/2, height/2, randomSpeed, randomAngle));
	}

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		for(var i = 0; i < numParticles; i++) {
			var p = particles[i];
			p.update();

			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
			context.fill();
		}
		requestAnimationFrame(update);
	}
};