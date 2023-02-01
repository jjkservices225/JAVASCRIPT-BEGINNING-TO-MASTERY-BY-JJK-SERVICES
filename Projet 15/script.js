//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

// What is __proto__ , [[prototype]]
//What is prototype
//Use prototype

// const userMethods = {
//     about : function() {
//     return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function() {
//       return this.age >= 18;
//     },
//     sing: function() {
//       return "toon na na na la";
//     }
// }

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); //{}
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
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

const userOne = createUser("Vin", "Diesel", "vindiso1@gmail.com", 43, "Palm Beach");

const userTwo = createUser("Vanessa", "Burgaff", "burgaff22@gmail.com", 26, "Paris");

const userThree = createUser("Bernard", "Tapis", "bernardtapis@gmail.com", 70, "Nice");


console.log(userOne);
console.log(userOne.about());
console.log(userOne.is18());
console.log(userOne.sing());



