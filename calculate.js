const OPERATIONS = {
  sum: "+",
  substract: "-",
  multiply: "*",
  division: "/",
};

function calculate(a, b, operation) {
  let result = 0;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Invalid operation";
  }
  return result;
}
