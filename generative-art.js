let particles = [];
const numParticles = 50;

function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent('hero-canvas-container');
  canvas.style('position', 'absolute');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '0');

  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
  noStroke();
}

function draw() {
  background(247, 248, 251, 10); // Subtle fade effect
  
  for (let particle of particles) {
    particle.update();
    particle.display();
    particle.checkEdges();
  }

  // Connect nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let d = dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
      if (d < 120) {
        let alpha = map(d, 0, 120, 70, 0);
        stroke(150, 150, 150, alpha);
        line(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(0.5, 1.5));
    this.size = random(2, 4);
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    fill(180, 180, 180, 100);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  checkEdges() {
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }
}
