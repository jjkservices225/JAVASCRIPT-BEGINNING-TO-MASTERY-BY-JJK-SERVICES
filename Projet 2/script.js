//JAVASCRIPT STRICT METHODS
"use strict";

console.log("Hello World!");

          //THE VARIABLES

var firstName = "Harshit";

console.log(firstName);

let LastName = "Mohit";

console.log(LastName);

const pi = 3.14;

console.log(pi);

        //STRING INDEXING

let surNom = "JeanJacques";

console.log(surNom[3]);

console.log(surNom.length);

      //USEFUL STRING METHODS

let name = "   kouame    ";

console.log(name.length);

name = name.trim();

console.log(name);

name = name.toUpperCase();

console.log(name);

name = name.toLowerCase();

console.log(name);

let friend = "Jacqueline";

friend = friend.slice(0,4);

console.log(friend);


         //TYPE OF OPERATOR
//Data type (string, number, booleans, undefined, null, biglnt, symbol)

//convert number to string
let age = 31;

console.log(typeof (age + ""));

age = age + "";

console.log(typeof(age));

//convert string to number

let myStr = +"34";

console.log(typeof(myStr));

let string1 = "22";
let string2 = "51";

let newStroing = +string1 + +string2;
console.log(newStroing);
console.log(typeof(newStroing));

//Template Strings

let myAge = 29;
let myName = "Bertrand";

let aboutMe1 = "my name is " + myName  + " and my age is " + myAge;

console.log(aboutMe1);

let aboutMe2 = `My name is ${myName} and my age is ${myAge}`;

console.log(aboutMe2);

//undefined

let myFather;

console.log(myFather);
console.log(typeof(myFather));

//null
let btn = null;

console.log(btn);
console.log(typeof(btn));

//biglnt

let myNumber1 = BigInt(12);
let myNumber2 = 123n;

console.log(myNumber1);
console.log(myNumber1+ myNumber2);

//booleans & comparaison operator
//booleans (true, false)

let num1 = 5;
let num2 = 7;

console.log(num1>num2);
console.log(num1<num2);
console.log(typeof(num1<num2));

//comparaison(== vs ===)

let num3 = 10;
let num4 = 9;
let num5 = "9";

console.log(num3 == num4);
console.log(num4 == num5);
console.log(num4 === num5);

//comparaison(!= vs !==)

let num6 = 54;
let num7 = 41;
let num8 = "54";

console.log(num6 != num7);
console.log(num6 != num8);
console.log(num6 !== num8);

//Truthy and Falsy Values

true //Value
false //Value