const n = 5;
const m = 4;

const mas = [];

for (var i = 0; i < n; i++) {
  mas[i] = [];
  for (var j = 0; j < m; j++) {
    mas[i][j] = Math.round(Math.random() * 20);
  }
}

console.table(mas);

mas.forEach((element, index) => {
  if ((index + 1) % 2 === 0) {
    element = element.sort((a, b) => a - b);
  }
});

console.table(mas);
