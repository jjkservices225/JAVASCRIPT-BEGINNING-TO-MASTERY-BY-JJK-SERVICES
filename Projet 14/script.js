//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

// What is __proto__ , [[prototype]]
//What is prototype
//Use prototype

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
  const user = Object.create(userMethods); //{} Is Proto
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}

const userOne = createUser("Vin", "Diesel", "vindiso1@gmail.com", 43, "Palm Beach");

const userTwo = createUser("Vanessa", "Burgaff", "burgaff22@gmail.com", 26, "Paris");

const userThree = createUser("Bernard", "Tapis", "bernardtapis@gmail.com", 70, "Nice");


console.log(userOne);
console.log(userOne.about());



function hello(){
  console.log("hello World!");
}

// const hello = {key1: "value1"};
// const hello = ["value1"];

// console.log(hello.prototype);

// if(hello.prototype) {
//   console.log("prototype is present");
// } else {
//   console.log("prototype is not present");
// }

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function() {
  return "lalala";
}
console.log(hello.prototype.sing());
