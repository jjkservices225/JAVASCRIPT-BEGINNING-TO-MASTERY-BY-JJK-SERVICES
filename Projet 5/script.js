//THE ARRAYS IN JAVASCRIPT
//Intro to arrays

let fruits = ["apple", "mango", "grapes"];

let obj = {};

console.log(fruits[2]);

fruits[1] = "banana";

console.log(fruits);

console.log(typeof fruits);

console.log(typeof obj);

console.log(Array.isArray(fruits));

console.log(Array.isArray(obj));

//Push pop shift unshift

// let fruits1 = ["apple", "mango", "grapes"];

// console.log(fruits1);

// // fruits1.push("banana");

// // console.log(fruits1);

// // fruits1.pop();

// // console.log(fruits1.pop());

// let poppedFruits = fruits1.pop();

// console.log(fruits1);

// console.log("popped fruits is", poppedFruits);

// let fruits2 = ["apple", "mango", "grapes"];

// // fruits2.unshift("banana");

// // fruits2.unshift("myfruits");

// let removefruits2 = fruits2.shift();

// console.log(fruits2);

// console.log("remove fruits is ", removefruits2);

//Primitive vs reference data types

let num1 = 6;
let num2 = num1;

console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;

console.log("after increamenting num1");
console.log("value of num1 is ", num1);
num2++;

console.log("after increamenting num2");
console.log("value of num2 is ", num2);

//reference types

let arrays1 = ["items1", "items2"];
let arrays2 = arrays1;

console.log("arrays1", arrays1);
console.log("arrays2", arrays2);
arrays1.push("items3");
console.log("after pushing element to array 1");
console.log("arrays1", arrays1);
console.log("arrays2", arrays2);

//Clone array & spread operator

let arrays3 = ["items4", "items5"];
// let arrays4 = ["items4", "items5"];
// let arrays4 = arrays3.slice(0).concat(["items8", "items9"]);
// let arrays4 = [].concat(arrays3);

//spread
let oneMoreArray = ["items10", "items11"];
let arrays4 = [...arrays3, ...oneMoreArray];
arrays3.push("items6");

console.log(arrays3 === arrays4);
console.log(arrays3);
console.log(arrays4);

//For loop in array

let fruits4 = ["apple", "mango", "grapes", "banana"];

console.log(fruits4.length);
console.log(fruits4[2]);
console.log(fruits4[fruits4.length - 1]);

let fruits5 = [];

for (let i = 0; i < fruits4.length; i++) {
  fruits5.push(fruits4[i].toUpperCase());
}

console.log(fruits5);

// use const for creating arrays

const fruits6 = ["orange", "mango"];
fruits6.push("banana");
console.log(fruits6);

//While loop in array

const fruits7 = ["orange", "mango", "banana"];
const fruits8 = [];

let i = 0;

while (i < fruits7.length) {
  fruits8.push(fruits7[i].toUpperCase());
  i++;
}

console.log(fruits8);

// For of loop

const fruits9 = ["orange", "mango", "banana", "ananas", "citron"];
const fruits10 = [];

for (let fruit of fruits9) {
  fruits10.push(fruit.toUpperCase());
}

console.log(fruits10);

//For in loop

const fruits12 = ["orange", "mango", "banana", "ananas", "citron"];
const fruits13 = [];

for (let index in fruits12) {
  fruits13.push(fruits12[index].toUpperCase());
}

console.log(fruits13);

//Array destructuring

const myArrays = ["value1", "value2", "value3", "value4"];
// let myVal1 = myArrays[1];
// let myVal2 = myArrays[1];

// console.log("value of myval1 is ", myVal1);
// console.log("value of myval2 is ", myVal2);

let [myVal1, myVal2, ...myNewArray] = myArrays;
// let myNewArray = myArrays.slice(2);
// myVal1 = "value change";
// myVal2 = "value change";

console.log("value of myval1 is ", myVal1);
console.log("value of myval2 is ", myVal2);
console.log(myNewArray);
