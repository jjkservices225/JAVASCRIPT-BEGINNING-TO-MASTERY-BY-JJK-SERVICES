//Get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));

link.setAttribute("href", "https://www.google.ci");
console.log(link.getAttribute("href"));


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));