class Planet {
  x;
  y;
  position;
  radius;
  size;
  atmosphere;
  speed;
  constructor(center, speed = 0.1, size = 10, atmosphere, radius) {
    this.center = center;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.size = size;
    this.speed = speed;
    this.alpha = 0;
    this.position = new Position((0, 0);

  }
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  move() {
    this.position.x = this.radius * Math.sin(this.alpha) + this.position.x;
    this.position.y = this.radius * Math.cos(this.alpha) + this.position.y;
    this.alpha += (this.speed * Math.PI) / 180;
  }
}
class Position {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


export { Planet, Position };
