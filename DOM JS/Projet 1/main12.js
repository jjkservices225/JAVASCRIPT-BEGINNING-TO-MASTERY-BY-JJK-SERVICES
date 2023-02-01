//Create elements

const newTodoItem = document.createElement("li");
// // console.log(newTodoItem);

const newTodoItemText = document.createTextNode("Good Bye");
// // newTodoItem.appendChild(newTodoItemText);
// newTodoItem.textContent = "Teach Students";

// //append
// //prepend
const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem);
// // todoList.prepend(newTodoItem);
// // console.log(newTodoItem);

// //remove
const todo1 = document.querySelector(".todo-list li");
// // todo1.remove();
// // console.log(todo1);

//after
//before

const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "Teach Me";
const todoList1 = document.querySelector(".todo-list");
todoList1.after(newTodoItem1);
// todoList1.before(newTodoItem1);
