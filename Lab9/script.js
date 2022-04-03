var isClickImage = false;

document
  .getElementById("image-info-content")
  .addEventListener("click", (event) => {
    let imageInfo = event.currentTarget;

    const title = imageInfo.querySelectorAll(
      ".image-info-content-title__item"
    )[0];

    const body = document.querySelector("body");

    if (isClickImage) {
      body.style.background = "white";
      title.textContent = "Title";
    } else {
      body.style.background = "bisque";
      title.textContent = "New Title";
    }

    isClickImage = !isClickImage;
  });

var isClickSignature = false;

document
  .getElementById("image-info-signature__item")
  .addEventListener("click", (event) => {
    let signature = event.currentTarget;

    if (isClickSignature) {
      signature.style.color = "black";
    } else {
      signature.style.color = "red";
    }

    isClickSignature = !isClickSignature;
  });
