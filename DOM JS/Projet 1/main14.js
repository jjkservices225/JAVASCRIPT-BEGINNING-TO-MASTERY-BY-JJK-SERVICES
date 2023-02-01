//Clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "My New Todo";

const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);