/*
 * Functions that operate on other functions,
 * either by taking them as arguments or by
 * returning them, are called higher-order functions.
 */

function run(fn) {
  return fn();
}

function sayHello() {
  console.log("Hello!");
}

run(sayHello); // when invoke functions with () calls return his
