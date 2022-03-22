function isNumber(char) {
  return /^\d$/.test(char);
}

function sumDigitsFromString(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i])) {
      sum += Number(str[i]);
    }
  }

  return sum;
}

const data = "12ab34cde5";
const k = 7;

console.log(`${data[k]} is a ${isNumber(data[k]) ? "number" : "char"}`);

const sum = sumDigitsFromString(data);
console.log(`Sum of numbers from a string: ${sum}`);
console.log(`Sum is ${sum % 2 === 0 ? "even" : "odd"}`);
