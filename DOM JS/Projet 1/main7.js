//Select multiple elements

//get multiple elements items using getElement by class name
//get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item"); //HtmlCollection
// console.log(navItems);
// console.log(navItems[1]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));

const navItems = document.querySelectorAll(".nav-item"); //NodeList
console.log(navItems);
console.log(navItems[2]);
