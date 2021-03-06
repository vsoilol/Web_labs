const weeks = [
  [
    "бел",
    [
      "панядзелак",
      "аўторак",
      "серада",
      "чацвер",
      "пятніца",
      "субота",
      "нядзеля",
    ],
  ],
  [
    "рус",
    [
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
      "воскресенье",
    ],
  ],
  [
    "анг",
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  ],
  [
    "нем",
    [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonntag",
    ],
  ],
];

const lang = "бел";
const msw = weeks.find((_) => _.find((locale) => locale == lang))[1];
console.log(msw);
