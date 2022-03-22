function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const value = -774.652;
const array = Array(9);

for (let index = 0; index < array.length; index++) {
  array[index] = getRandomInt(20);
}

taskButton1.onclick = () => {
  const result = Math.abs(value);
  alert(`Модуль числа ${value} = ${result}`);
};

taskButton2.onclick = () => {
  const result = Math.round(value, 3);
  alert(
    `Округление числа ${value} с помощью Math.round до 3 знаков после запятой равно ${result}`
  );
};

taskButton3.onclick = () => {
  let result = 0;
  array.forEach((element) => (result += Math.pow(element, 2)));
  alert(
    `Результат возведение в степень 2 элементов массив и их сложение ${result}`
  );
};

alert(
  arr[5] +
    "-11\n" +
    arr[7] +
    "-11\n" +
    arr[9] +
    "-11\n" +
    arr[13] +
    "-11\n" +
    arr[16] +
    "-11\n" +
    arr[18] +
    "-11"
);
