const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Position {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const R = 30;
let x = 0,
  y = 0;

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fill();
  x = R * Math.sin(alpha);
  y = R * Math.cos(alpha);
};

window.requestAnimationFrame();
