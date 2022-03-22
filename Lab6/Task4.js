function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const k = 8;
const m = 6;
const mas = [];

for (var i = 0; i < m; i++) {
  mas[i] = [];
  for (var j = 0; j < k; j++) {
    mas[i][j] = makeid(3);
  }
}

console.table(mas);

for (var i = 0; i < k - 4; i++) {
  const newRow = [];
  for (var j = 0; j < k; j++) {
    newRow.push(makeid(2));
  }
  mas.unshift(newRow);
}

console.table(mas);

for (var i = 0; i < m - 3; i++) {
  mas.pop();
}

console.table(mas);
