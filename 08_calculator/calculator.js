const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  // return array.reduce((a, b) => a + b, 0);
  return array.reduce((a, b) => add(a, b), 0);
};

const multiply = function (array) {
  // return array.reduce((a, b) => a * b, 1);
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let fct = 1;
  for (i = num; i > 0; i--) {
    fct = fct * i;
  }
  return fct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
