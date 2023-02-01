//More methods to add elements on page
// Some old methods to support poor IE

//appendChild
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "My New Todo";
// ul.appendChild(li);

//insertBefore
const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li, referenceNode);

//replaceChild
// ul.replaceChild(li, referenceNode);

//remopveChild
// ul.removeChild(referenceNode);

 