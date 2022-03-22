function randomInRange(min, max) {
  return parseFloat(
    (Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min
    ).toFixed(2)
  );
}

const array = [];
for (let i = 0; i < 25; i++) {
  array.push(randomInRange(1, 20));
}

let sum = 0;
let multiply = 1;

console.log(array);
array.forEach((_, i) => {
  if (i % 3 === 0) {
    sum += _;
  }

  if (_ % 2 !== 0) {
    multiply *= _;
  }
});

console.log(`sum: ${sum}; multiply: ${multiply}`);
