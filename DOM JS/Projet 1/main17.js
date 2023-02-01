//How to get the dimensions of the element
//height & width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect().top;  //height, width, top
console.log(info);