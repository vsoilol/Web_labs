function changeSize(id, length, thickness) {
  const element = document.getElementById(id);
  element.style.width = length + "%";
  element.style.height = thickness + "px";
}

function createForm() {
  var f = document.createElement("form");
  f.setAttribute("method", "post");

  var i = document.createElement("input");
  i.setAttribute("type", "text");
  i.setAttribute("placeholder", "Место рождения");

  var a = document.createElement("input");
  a.setAttribute("type", "text");
  a.setAttribute("placeholder", "Возраст");

  var b = document.createElement("input");
  b.setAttribute("type", "text");
  b.setAttribute("placeholder", "Должность");

  f.appendChild(i);
  f.appendChild(a);
  f.appendChild(b);

  document.getElementById("form").appendChild(f);
}

document.getElementById("questionnaire").addEventListener("submit", (event) => {
  const elements = event.currentTarget;
  const courses = getCheckedValues("course", elements);
  const language = elements.language.value;
  const cost = parseInt(elements.cost.value);
  const result = calculateCost(courses, language, cost);
  alert("Итоговая сумма " + result);
  return false;
});

function getCheckedValues(checkboxClassName, formElements) {
  var checkedValue = [];
  var inputElements = formElements.getElementsByClassName(checkboxClassName);
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue.push(parseInt(inputElements[i].value));
    }
  }
  return checkedValue;
}

function calculateCost(courses, language, cost) {
  debugger;
  let result = cost;

  switch (language) {
    case "en":
      result += 200;
      break;

    case "ru":
      result += 100;
      break;
  }

  result =
    courses.length > 0
      ? courses.map((x) => x * result).reduce((a, b) => a + b)
      : result;
  return result;
}
