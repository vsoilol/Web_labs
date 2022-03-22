const date = new Date(Date.now());
console.log(date.toLocaleDateString("ru-RU"));

console.log(Date.parse(date));
console.log(date.getTime());

const options = { weekday: "long" };
const myDate = new Date("01/17/2003");
console.log(
  `${new Intl.DateTimeFormat("ru-RU", options).format(
    myDate
  )} ${myDate.getDay()}`
);
