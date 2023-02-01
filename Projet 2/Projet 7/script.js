            //FUNCTIONS IN JAVASCRIPT
//􀁸 Function declaration

function singHappyBirthday() {
  console.log("happy birthday to you ....");
}

singHappyBirthday();

function sumTwonumber( numb1, numb2) {
  return numb1 + numb2;
}

const returnedValue = sumTwonumber(6, 7);
console.log(returnedValue);

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(9));

function firstChar(anyString) {
  return anyString[0];
}

console.log(firstChar("abc"));

function findTarget(array, target) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [1,3,8,90]
const ans = findTarget(myArray, 8);

console.log(ans);

//function Expression

const singHappyBirthday1 = function() {
  console.log("happy birthday to you ....");
}

singHappyBirthday1();

const sumTwonumber1 = function( numb1, numb2) {
  return numb1 + numb2;
}

const sum1 = sumTwonumber1(7,9);
console.log(sum1);

const isEven1 = function(number) {
  return number % 2 === 0;
}

console.log(isEven1(2));

const firstChar1 = function(anyString) {
  return anyString[1];
}

console.log(firstChar1("edf"));

const findTarget1 = function(array, target) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray1 = [1,3,8,90]
const ans1 = findTarget1(myArray1, 3);

console.log(ans1);

//Arrows functions

const singHappyBirthday2 = () => {
  console.log("happy birthday to you ....");
}

singHappyBirthday2();

const sumTwonumber2 = ( numb1, numb2) => {
  return numb1 + numb2;
}

const sum2 = sumTwonumber2(12,42);
console.log(sum2);

const isEven2 = number => number % 2 === 0;

console.log(isEven2(12));

const firstChar2 = anyString => anyString[2];

console.log(firstChar2("ghi"));

const findTarget2 = (array, target) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray2 = [1,3,8,90]
const ans2 = findTarget2(myArray1, 1);

console.log(ans2);

//function hoisted 

function hello() {
  console.log("Hello World!")
}

hello();

console.log(hello1);
var hello1 = "hello world";
console.log(hello1);

//Function inside function

function app(){
  const myFunc = () => {
    console.log("hello from my func");
  }
  const addTwo = (number1, Number2) => {
    return number1 + Number2;
  }
  const multip = (number1, Number2) => number1* Number2;

  console.log("Inside app");
  myFunc();
  console.log(addTwo(2, 5));
  console.log(multip(2, 5));
}

app();

//Lexical Scope

const myVar = "value1";

function myApp() {

  function myFunc1() {
    // const myVar = "value59";
    const myFunc2 = () => {
      console.log("Inside myfunc", myVar);
    }
    myFunc2();
  }
  console.log(myVar);
  myFunc1();
}

myApp();

