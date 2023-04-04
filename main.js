import { OPERATIONS } from "./calculate.js";

const inputNum1 = document.querySelector("#num-1");
const inputNum2 = document.querySelector("#num-2");
const btnRes = document.querySelector("#btn-res");
const selectOperation = document.querySelector("#select-operation");
const outputRes = document.querySelector("#output");

selectOperation.innerHTML = "";

Object.entries(OPERATIONS).forEach(([key, value]) => {
  console.log(key, value);
  const option = document.createElement("option");
  option.value = key;
  option.textContent = value.title;
  selectOperation.appendChild(option);
});

btnRes.addEventListener("click", function () {
  const a = parseInt(inputNum1.value);
  const b = parseInt(inputNum2.value);
  const operationKey = selectOperation.value;
  const operation = OPERATIONS[operationKey];
  if (operation) {
    const result = operation.method(a, b);
    outputRes.innerHTML = result;
  } else {
    alert("Wrong operation:", operationKey);
  }
});
