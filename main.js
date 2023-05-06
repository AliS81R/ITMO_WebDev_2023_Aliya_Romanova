import { Planet, Position } from "./src/solar-system.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0,
  y = 0;

const R = 130;
// let SPEED_MULTI = 0.4;

let alpha = 0;

const centerPosition = new Position(canvas.width / 2, canvas.height / 2);
const sun = new Planet(centerPosition, 0, 10, "red", 100, 0.4);
const earth = new Planet(sun.position, 2.2, 10, "blue", 200, 1.9);
const planets = [
  sun,
  earth,
  new Planet(centerPosition, 60, "gray", 300, 0.7),
  new Planet(centerPosition, 35, "yellow", 330, 0.8),
];

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const planetIndex in planets) {
    let planet = planets[planetIndex];
    planet.move();
    planet.render(ctx);
  }

  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);
