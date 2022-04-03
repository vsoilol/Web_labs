const m = 6;
const k = 5;

const mas = [
  ["v", 2, "h", 34, "u", "o"],
  ["x", 76, "t", "J", 5, "R"],
  ["B", 3, 1, 2, "p", "d"],
  [123, "k", "W", 23, "f", "C"],
  ["h", "q", "R", "M", 16, "M"],
];

console.table(mas);

const numberArray = [];

for (var i = 0; i < mas.length; i++) {
  for (var j = 0; j < mas[0].length; j++) {
    if (Number.isInteger(mas[i][j])) {
      numberArray.push(mas[i][j]);
    }
  }
}

console.table(mas.reverse());

console.log(numberArray.sort((a, b) => a - b).join());
