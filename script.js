const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => {
  console.log(a, b);
  return a * b;
};

const divide = (a, b) => {
  if (b === 0) return "Error: Divide by Zero";
  return a / b;
};

const operate = (op, a, b) => {
  console.log(op, a, b);
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error: Illegal Operator Used";
  }
};

let num1 = "";
let num2 = "";
let op = "";
let res = "";

const numberButtons = document.getElementsByClassName("numButton");
const operationButtons = document.getElementsByClassName("opButton");
const display = document.getElementById("calculator-input");
const clear = document.getElementById("clearButton");
const eq = document.getElementById("eqButton");
const historySection = document.getElementById("history-calculations");

const updateDisplay = () => {
  if (op === "") display.value = `${num1}`;
  else if (res === "") display.value = `${num1} ${op} ${num2}`;
  else display.value = `${num1} ${op} ${num2} = ${res}`;
};

const addHistory = (num1, op, num2, res) => {
  historySection.innerHTML =
    `<div class="operation"> <div class="operation-numbers">${num1} ${op} ${num2}</div> <div class="operation-values">${res}</div> </div> ` +
    historySection.innerHTML;
};

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    if (op === "") {
      num1 += this.value;
    } else {
      num2 += this.value;
    }
    updateDisplay();
  });
}

for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener("click", function () {
    op = this.value;
    console.log(op);
    updateDisplay();
  });
}

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  op = "";
  updateDisplay();
});

eq.addEventListener("click", function () {
  if (num1 !== "" && num2 !== "" && op !== "") {
    console.log(num1, num2, op);
    res += operate(op, Number(num1), Number(num2));
    updateDisplay();
    addHistory(num1, op, num2, res);
    num1 = "";
    op = "";
    num2 = "";
    res = "";
  }
});


