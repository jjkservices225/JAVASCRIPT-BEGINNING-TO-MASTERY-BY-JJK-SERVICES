              //HOW JAVASCRIPT WORKS

//Intro to closures
//function can return functions

function outerFunction() {
  function innerFunction() {
    console.log("Hello World !");
  }
  return innerFunction;
}

const ans = outerFunction();
// console.log(ans);
ans();

//Closure example 1

function pintfullname(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;
}

const add = pintfullname("Marco", "Paulo");
add();

//Closure Example 2

function hello(x) {
  const a = 'varA';
  const b = 'varB';
  return function() {
    console.log(a, b, x);
  }
}

const all = hello("arg");
all();

//Closure Example 3

// function myFunction(power) {
//   return function(number) {
//     return number ** power;
//   }
// }

// const square = myFunction(2);
// const summ = square(3);
// console.log(summ);

// const cube = myFunction(3);
// const sum = cube(3);
// console.log(sum);


const myFunction = (power) => number => number ** power;


const square = myFunction(2);
const summ = square(3);
console.log(summ);

const cube = myFunction(3);
const sum = cube(3);
console.log(sum);

function func() {
  let counter = 0;
  return function() {
    if(counter < 1) {
      console.log("Hi You Called Me");
      counter++;
    } else {
      console.log("Sorry, I already got another call");
    }
  }
}

const myFunc = func();
myFunc();
myFunc();
myFunc();