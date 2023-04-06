const createBlock =(x, y, size, color) => {
   const result = document.createElement("div");
    if(color) {
        result.style.backgroundColor = color;
    }else{
        const isEmpty = Math.random() > 0.5;
        if(isEmpty) {
            result.style.backgroundColor = "black";
        }
    }
   const randomRange = (max, min) => Math.floor(Math.random() * (max - min) + min)
   const isEmpty = Math.random() > 0.5;
   if (isEmpty) {
   } else  {
       result.style.backgroundColor ="black";
   }
    result.style.width =result.style.height = `${size}px`;
    result.style.height ="50px";
    result.style.position ="absolute";
    result.style.left = `${x}px`;
    result.style.top = `${y}px`;
    return result;
};

const appendBlock = (block) => document.getElementById(("app")).appendChild(block);

const block = createBlock();

document.getElementById(("app")).appendChild(block);

const BLOCK_SIZE = 50;

let columns = 5;
let xPos = 0;
let yPos = 0;

const line = [];

while (columns-- > 0) {
    const block = createBlock(xPos, yPos, BLOCK_SIZE);
    line.push(block);
    appendBlock(block);
    xPos += BLOCK_SIZE;

}

line.reverse().forEach((item) => {
    yPos += BLOCK_SIZE;
    const block =createBlock(xPos, yPos, BLOCK_SIZE, item.style.background )
    appendBlock(block);

});