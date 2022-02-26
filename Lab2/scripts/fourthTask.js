let isYes = confirm("Выберите ДА или НЕТ?");

const a = 5;
const b = 7;
const c = 12;

const d = 6;
const e = 4;
const f = 22;

if (isYes) {
  const y = (a - b / (a * 2)) / Math.pow(c, 2);
  document.writeln(y);
} else {
  const r = d / (e * (f / 2)) + d * (e / f);
  document.writeln(r);
}
