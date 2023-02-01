//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//New keyword

// function createUser(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// createUser.prototype.about = function() {
//   console.log(this.firstName, this.age);
// }

// const userOne = new createUser("Freedy", 14);


// console.log(userOne);
// console.log(userOne.about());
// userOne.about();

function createUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

createUser.prototype.about = function() {
  return `${this.firstName} is ${this.age} years old.`;
}

createUser.prototype.is18 = function() {
  return this.age >= 18;
}

createUser.prototype.sing = function() {
  return "toon na na na la";
}

const userOne = new createUser("Vin", "Diesel", "vindiso1@gmail.com", 43, "Palm Beach");

const userTwo = new createUser("Vanessa", "Burgaff", "burgaff22@gmail.com", 26, "Paris");

const userThree = new createUser("Bernard", "Tapis", "bernardtapis@gmail.com", 70, "Nice");

console.log(userOne);
// console.log(userOne.about());
console.log(userOne.is18());
// console.log(userOne.sing());

