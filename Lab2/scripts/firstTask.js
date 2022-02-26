const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const symbolsIndex = [2, 9, 16, 17, 18, 21];

let result = "";

symbolsIndex.forEach((index) => (result += `${alphabet[index - 1]}9-`));
alert(result.slice(0, -1));
