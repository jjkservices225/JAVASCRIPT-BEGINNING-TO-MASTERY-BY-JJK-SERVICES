//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//Constructor function with new keyword

function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

CreateUser.prototype.about = function() {
  return `${this.firstName} is ${this.age} years old.`;
}

CreateUser.prototype.is18 = function() {
  return this.age >= 18;
}

CreateUser.prototype.sing = function() {
  return "toon na na na la";
}

const userOne = new CreateUser("Vin", "Diesel", "vindiso1@gmail.com", 43, "Palm Beach");

const userTwo = new CreateUser("Vanessa", "Burgaff", "burgaff22@gmail.com", 26, "Paris");

const userThree = new CreateUser("Bernard", "Tapis", "bernardtapis@gmail.com", 70, "Nice");

for(let key in userOne) {
  // console.log(key);
  if (userOne.hasOwnProperty(key)) {
    console.log(key);
  }
}

//More discussion about proto and prototype

let numbers = [1,2,3];

// let numbers = new Array(1,2,3);

// console.log(Object.getPrototypeOf(numbers));

console.log(Array.isArray(Array.prototype));
console.log(numbers);

function hello() {
  console.log('hello');
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);
