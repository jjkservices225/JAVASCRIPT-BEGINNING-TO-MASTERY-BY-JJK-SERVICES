//Deeply understand dom tree, root node , element nodes, text nodes

const rootNode = document.getRootNode();
// console.log(rootNode);

const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);

// console.log(htmlElementNode.childNodes);  //NodeList(3) [head, text, body]
// console.dir(htmlElementNode);

const haedElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(haedElementNode);
// console.log(haedElementNode.childNodes);
// console.log(haedElementNode.parentNode);
// console.log(haedElementNode.nextSibling);
// console.log(haedElementNode.nextElementSibling);
// console.log(haedElementNode.nextSibling.nextSibling);
// console.log(textNode1);
// console.log(bodyElementNode);

const h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.parentNode);
// console.log(h1.parentElement);

const div = h1.parentNode;
// const div = h1.parentNode.parentNode;
// div.style.color = "#fefefe";
// div.style.backgroundColor = "#333";

const body = document.body;
// body.style.color = "#fefefe";
// body.style.backgroundColor = "purple";

const head = document.querySelector("head");
// console.log(head);

const title = head.querySelector("title");
// console.log(title);
// console.log(title.childNodes);

const container = document.querySelector(".container");
// console.log(container);
// console.log(container.childNodes);
console.log(container.children);
 