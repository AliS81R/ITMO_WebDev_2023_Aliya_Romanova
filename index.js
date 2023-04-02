const inputNum1 = document.querySelector("#num-1");
const inputNum2 = document.querySelector("#num-2");
const btnRes = document.querySelector("#btn-res");
const selectOperation = document.querySelector("#select-operation");
const outputRes = document.querySelector("#output");

btnRes.addEventListener("click", function () {
  const a = Number(inputNum1.value);
  const b = Number(inputNum2.value);
  const operation = selectOperation.value;

  const result = calculate(a, b, operation);

  outputRes.innerHTML = result;
});
