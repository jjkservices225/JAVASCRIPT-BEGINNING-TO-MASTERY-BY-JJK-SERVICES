//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//Short syntax for methods

const userMethods = {
    about : function() {
    return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function() {
      return this.age >= 18;
    },
    sing: function() {
      return "toon na na na la";
    }
}

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  user.sing = userMethods.sing;
  return user;
}

const userOne = createUser("Vin", "Diesel", "vindiso1@gmail.com", 43, "Palm Beach");

const userTwo = createUser("Vanessa", "Burgaff", "burgaff22@gmail.com", 26, "Paris");

const userThree = createUser("Bernard", "Tapis", "bernardtapis@gmail.com", 70, "Nice");


console.log(userOne.about());
console.log(userTwo.about());
console.log(userThree.sing());

// What is __proto__ , [[prototype]]
//What is prototype
//Use prototype

const obj1 = {
  key1: "value1",
  key2: "value2"
}

const obj2 = Object.create(obj1);

obj2.key3 = "value3";

console.log(obj2);
console.log(obj2.__proto__);