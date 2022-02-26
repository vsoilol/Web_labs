const symbols = "020916171821";
let numbers = [];

let startIndex = 0;
for (let index = 0; index < 4; index++) {
  numbers.push(parseInt(symbols.substring(startIndex, startIndex + 3)));
  startIndex += 3;
}

alert((numbers[0] * numbers[1] + numbers[2]) % numbers[3]);
