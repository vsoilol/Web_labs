document.getElementById("images").addEventListener("mouseover", (event) => {
  let div = event.currentTarget;
  div.style.flexDirection = "row-reverse";
});

document.getElementById("images").addEventListener("mouseout", (event) => {
  let div = event.currentTarget;
  div.style.flexDirection = "row";
});

var test_items = document.querySelectorAll(".image");

for (var i = 0; i < test_items.length; i++) {
  test_items[i].addEventListener("mouseover", (event) => {
    let div = event.currentTarget;
    div.style.width = "260px";
    div.style.height = "260px";
  });

  test_items[i].addEventListener("mouseout", (event) => {
    let div = event.currentTarget;
    div.style.width = "200px";
    div.style.height = "200px";
  });
}
