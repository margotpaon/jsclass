const numbers = [1, 2, 3, 4, 5, 6];

const numberV2 = numbers.map(function (el) {
  return el * 2;
});

console.log(numberV2);

const students = [
  { name: "Jake", score: 6.4 },
  { name: "Susan", score: 8.6 },
  { name: "Emma", score: 9.4 },
  { name: "Peter", score: 9.1 },
];

const getScore = (el) => el.score;
const result = students.map(getScore).map(Math.ceil);
console.log(result);
