const R = new Array(5);
const k = 5;
const m = 1;
const n = 3;
const symbols = ["q", "z", "s"];

for (let i = 0; i < k; i++) {
  R[i] = Math.round(Math.random() * 20);
}

console.log(R);

for (let i = 0; i < m; i++) {
  R.unshift(i + 1);
}

console.log(R);

for (let i = 0; i < n; i++) {
  const random = Math.floor(Math.random() * symbols.length);
  R.push(symbols[random]);
}

console.log(R);
