              //HOW JAVASCRIPT WORKS

//Global Execution context

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Julien";
console.log(firstName);

//This and window in global execution context

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction() {
  console.log("this is my function");
}

var firstName = "Elvis";
var lastName = "Prisley";
var fullName = firstName + " " + lastName;
console.log(fullName);

//Hoisting

console.log(this);
console.log(window);
myFunction();
console.log(fullName);

function myFunction() {
  console.log("this is my function");
}

var firstName = "James";
var lastName = "Milner";
var fullName = firstName + " " + lastName;
console.log(fullName);

//function expression

console.log(myFunction);

var myFunction = function() {
  console.log("this is my second function");
}

console.log(myFunction);
  
myFunction();

//Are let and const are hoisted ? What is a reference Error ?

// console.log(myName);
let myName = "Marc";
console.log(myName);

// console.log(name);
const name = "Pierre";
console.log(name);

console.log("Hello World !");
let frtNamke = "Bruno";
let lstName = "De La Cornet";

const myFunc = function() {
  let var1 = "first variable";
  let var2 = "second variable";
  console.log(var1);
  console.log(var2);
}

myFunc();

// Function execution context

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
  console.log(arguments);
  let myVar = "var inside func";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("Mike", "Pompeo");
console.log(personName);

//Scope chain and lexical environment

const lastName1 = "Bouviet";

const printName = function() {
  const firstName1 = "Patrick";
  function myFunc1() {
    console.log(firstName1);
    console.log(lastName1);
  }
  myFunc1();
}

printName();