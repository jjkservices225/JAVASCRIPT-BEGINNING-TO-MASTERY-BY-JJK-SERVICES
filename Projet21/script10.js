//Convert nested Callbacks to flat code using promises

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// Pyramid of doom

function changeText(
  element,
  text,
  color,
  time,
  onSuccesCallback,
  onFaillureCallback
) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resovle();
      } else {
        reject("Element not found");
      }
    }, time);
  });
}

changeText(heading1, "heading one", "violet", 1000)
  .then(() => {
    changeText(heading2, "heading two", "green", 1500);
  })
  .then(() => {
    changeText(heading3, "heading three", "gray", 2000);
  })
  .then(() => {
    changeText(heading4, "heading four", "yellow ", 2500);
  })
  .then(() => {
    changeText(heading5, "heading five", "brown ", 3000);
  })
  .then(() => {
    changeText(heading6, "heading six", "blue ", 3500);
  })
  .then(() => {
    changeText(heading7, "heading seven", "pink ", 4000);
  })
  .then(() => {
    changeText(heading8, "heading eight", "red ", 4500);
  })
  .then(() => {
    changeText(heading9, "heading nine", "beige ", 5000);
  })
  .then(() => {
    changeText(heading10, "heading ten", "black ", 5500);
  })
  .catch((error) => {
    alert(error);
  });
