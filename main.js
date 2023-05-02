const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(150, 50, 50, 0, Math.PI * 2);
ctx.fill();
