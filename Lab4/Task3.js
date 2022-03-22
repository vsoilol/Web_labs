function isLeap(year) {
  return new Date(year, 1, 29).getDate() === 29;
}

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const date = new Date("12/20/2000");
console.log(
  `${date.toLocaleDateString("ru-RU")} - ${date.toLocaleString("ru-RU", {
    month: "long",
  })}, ${isLeap(date.getFullYear()) ? "leap" : "not leap"}`
);
