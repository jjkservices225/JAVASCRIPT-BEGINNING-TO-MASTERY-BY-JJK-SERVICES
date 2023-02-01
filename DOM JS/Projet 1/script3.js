//Event object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function (event) {
//   console.log(event);
// });

const allButton = document.querySelectorAll(".my-buttons button");

for (let button of allButton) {
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    // console.log(e.currentTarget);
  });
}
