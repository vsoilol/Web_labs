function randomInRange(x) {
  return parseFloat(Math.sin(Math.pow(x, 2)).toFixed(3));
}

const array = [];

for (let i = 0; i < 14; i++) {
  array.push(randomInRange(i));
}
console.log(array);
console.log(array.sort());
