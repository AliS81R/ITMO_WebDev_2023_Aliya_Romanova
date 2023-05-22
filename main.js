const DOM = (id) => document.getElementById(id);
const appendBlockToContainer = (block, container) => container.appendChild(block);

// const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getColorOrEmptyOnRandom = () => {
  const isNotEmpty = Math.random() > 0.5;
  if (isNotEmpty) {
    return "black";
  }
  return 'red';
};
const createBlock = (x, y, size, color) => {
  const result = document.createElement("div");
  if (color) {
    result.style.backgroundColor = color;
  }
  console.log(x, y);
  result.style.width = result.style.height = `${size}px`;
  result.style.position = "absolute"
  result.style.left = `${x}px`;
  result.style.top = `${y}px`;
  return result;
};

const BLOCK_SIZE = 50;
const STEP_DELTA_X = BLOCK_SIZE;
const DIMENSION = 8;
const DIMENSION_HALF = DIMENSION / 2;

const container = DOM('app')

let columns = 0;
let rows = 0;
let yPos = 0;
let xPos = 0;

// while (rows-- > 0) {

let halfLineColors = [];

while (columns < DIMENSION_HALF) {
  const color = getColorOrEmptyOnRandom();
  const block = createBlock(xPos, yPos, BLOCK_SIZE, color);
  halfLineColors.push(color);
  appendBlockToContainer(block, container);
  xPos += STEP_DELTA_X;
  columns += 1;
}
const rightHalfOffsetX = (DIMENSION / 2) + BLOCK_SIZE;
halfLineColors.reverse().forEach((color, index) => {
  const block = createBlock(BLOCK_SIZE * (index + rightHalfOffsetX), yPos, BLOCK_SIZE, color);
  appendBlockToContainer(block, container);
});