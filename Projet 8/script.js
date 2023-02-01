//Block Scope Vs Function Scope


//let and const are block scope
{
  let lastName = "Jean Jacques";
  console.log(lastName);
}


{
  let firstName = "Kouame";
  console.log(firstName);
}

//Global scope

const firstName1 = "Kouassi";
console.log(firstName1);

//var is function scope

{
  var name = "Harshit";
}

console.log(name); 

function myApp() {
  if(true) {
    var firstName = "Marc";
    console.log(firstName);
  }

  if(true) {
    console.log(firstName);
  }
  console.log(firstName);
}

myApp();

//Default Parameters

function addTwo(a,b) {
  if(typeof b === "undefined") {
    b = 5;
  }
  return a + b;
}

const ans = addTwo(4);
console.log(ans);


function addTwo1(a,b=0) {
  return a + b;
}

const ans1 = addTwo1(4, 8);
console.log(ans1);

//Rest Parameters

function myFunc(a, b, ...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}

myFunc(2, 5, 4, 9, 12, 17);

function addAll(...numbers) {
  let total = 0;
  for(let number of numbers) {
    total = total + number;
  }
  return total;
}

const sum = addAll(3,4,5,25);
console.log(sum);

//Parameter Destructuring

const person = {
  firstName2: "Julien",
  gender: "male",
  age: 26,
}

// function printDefaults(obj) {
//   console.log(obj.firstName2);
//   console.log(obj.gender);
// }

function printDefaults({firstName2, gender, age}) {
  console.log(firstName2);
  console.log(gender);
  console.log(age);
}

printDefaults(person);

//intro to callback functions


function mySecond(nickname) {
  console.log("Inside my second function");
  console.log(`Your nickname is ${nickname}`);
}

function myFirst(callback) {
  console.log("Hello there I am a function and I can speek ");
  callback("Koblakazo");
}

myFirst(mySecond);

//Functions returning Functions


function myThree() {
  function hello(){
    return "Hello world!";
  }
  return hello;
}

const addTo = myThree();
console.log(addTo());