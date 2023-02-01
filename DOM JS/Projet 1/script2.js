//Add events on multiple elements

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function () {
//   console.log("You clicked me !");
// });

const allButton = document.querySelectorAll(".my-buttons button");

// for (let button of allButton) {
//   button.addEventListener("click", function() {
//     console.log("You clicked me !");
//     console.log(this);
//     console.log(this.textContent);
//   });
// }

// for (let button of allButton) {
//   button.addEventListener("click", () => {
//     console.log("You clicked me !");
//     console.log(this);
//   });
// }

// for (let i = 0; i < allButton.length; i++) {
//   allButton[i].addEventListener("click", function () {
//     console.log("You clicked me !");
//     console.log(this);
//     console.log(this.textContent);
//   });
// }

allButton.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log("You clicked me !");
    console.log(this);
    console.log(this.textContent);
  });
});
