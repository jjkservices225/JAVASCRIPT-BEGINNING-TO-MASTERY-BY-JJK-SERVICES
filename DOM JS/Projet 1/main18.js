//Intro to events

//click
//button press
//mouseover

const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = function () {
//   console.log("You clicked me !");
// }

//method ----> addEventListener

// function clickMe() {
//   console.log("You clicked me !");
// }

// btn.addEventListener("click", function() {
//   console.log("You clicked me !");
// });

btn.addEventListener("click", () => {
  console.log("You clicked me from arrow function");
});
