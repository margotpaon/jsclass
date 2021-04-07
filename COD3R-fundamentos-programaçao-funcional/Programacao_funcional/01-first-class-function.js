/*
 * A programming language is said to have
 * First-class functions when functions in
 * that laguage are treated like any other
 * variable
 */

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(add(10, 20));
console.log(sub(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));
