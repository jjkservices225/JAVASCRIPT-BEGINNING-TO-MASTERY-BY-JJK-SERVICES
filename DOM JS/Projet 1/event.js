//Event bubbling /event propogation
//Event Capturing
//Event delegation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//Event bubbling / Not capturing

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });

// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });

// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });

// document.body.addEventListener("click", () => {
//   console.log("bubble document body");
// });

//Event Capturing

// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!! on child");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!! on parent");
//   },
//   true
// );

// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!! on grandparent");
//   },
//   true
// );

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!! on document.body");
//   },
//   true
// );

//Event delegation

grandparent.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
