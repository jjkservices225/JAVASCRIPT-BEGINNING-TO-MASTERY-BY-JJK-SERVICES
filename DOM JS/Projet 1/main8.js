//loop through them
//Loop

// const navItems = document.getElementsByClassName("nav-item"); //HtmlCollection
// console.log(navItems.length);

// const navItems = document.getElementsByTagName("a"); //HtmlCollection
// console.log(navItems);

//We can't use forEach method to iterate through HTMLCollection
//simple for loop
//for of loop
//forEach

// for (let i = 0; i < navItems.length; i++) {
//   // console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "green";
//   navItem.style.color = "black";
//   navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "yellow";
//     navItem.style.fontWeight = "bold";
// }

// let navItems = document.getElementsByTagName("a"); //HtmlCollection
// console.log(navItems);

// navItems = Array.from(navItems);

// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "orange";
//   navItem.style.color = "blue";
//   navItem.style.fontWeight = "bold";
// });

const navItems = document.querySelectorAll("a");

// for (let i = 0; i < navItems.length; i++) {
//   // console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "green";
//   navItem.style.color = "black";
//   navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems) {
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "yellow";
//     navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem) => {
//   navItem.style.backgroundColor = "orange";
//   navItem.style.color = "blue";
//   navItem.style.fontWeight = "bold";
// });

console.log(navItems);
