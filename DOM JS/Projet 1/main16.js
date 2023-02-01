//More methods to add elements on page
//static list vs live list

//static element

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "Item 6";
// // const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

//live element

const ul = document.querySelector(".todo-list");
const listItems = document.getElementsByTagName("li");
const sixthLi = document.querySelector("li");
sixthLi.textContent = "Item 6";
// ul.append(sixthLi);
// console.log(listItems);
