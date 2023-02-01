//This keyword inside eventListener callback

const btn = document.querySelector(".btn-headline");

// function myfunc() {
//   console.log("You clicked me !");
//   console.log("value of this");
//   console.log(this);
// }

// btn.addEventListener("click", myfunc);

btn.addEventListener("click", function() {  //this method
  console.log("You clicked me !");
  console.log("value of this");
  console.log(this);
});

// btn.addEventListener("click", () => {   //window method
//   console.log("You clicked me !");
//   console.log("value of this");
//   console.log(this);
// });
