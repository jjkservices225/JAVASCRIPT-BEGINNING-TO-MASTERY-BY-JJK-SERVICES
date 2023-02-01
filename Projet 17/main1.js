//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//Class keyword

function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  return this;
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



