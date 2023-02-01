//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//This inside arrow functions

const users1 = {
  firstName: "Barry",
  age: 5,
  about: () => {
    console.log(this.firstName, this.age);
  }
}

//this method does not work
users1.about();

//Short syntax for methods

// const users2 = {
//   firstName: "Steve",
//   age: 16,
//   about: function() {
//     console.log(this.firstName, this.age);
//   }
// }

const users3 = {
  firstName: "Rodney",
  age: 25,
  about() {
    console.log(this.firstName, this.age);
  }
}

users3.about();

const users4 = {
  firstName: "Mike",
  lastName: "Pompeo",
  email: "koblakazo@gmail>com",
  age: 55,
  address: "Abidjan, Cocody, 2 Plateaux",
  about: function() {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function() {
    return this.age >= 18;
  }
}

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  users4.firstName = firstName;
  users4.lastName = lastName;
  users4.email = email;
  users4.age = age;
  users4.address = address;
  users4.about = function() {
    return `${this.firstName} is ${this.age} years old.`;
    };
    users4.is18 = function() {
      return this.age >= 18;
    };
    return users4;
}

const userOne = createUser("Vin", "Diesel", "vindiso1@gmail.com", 43, "Palm Beach");

console.log(userOne);

const about = userOne.about();
console.log(about);

const is18 = userOne.is18();
console.log(is18);