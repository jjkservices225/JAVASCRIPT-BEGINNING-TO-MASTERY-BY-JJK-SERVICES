//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//Methods
//functions inside objets

const person1 = {
  firstName: "Jean-Luis",
  age: 19,
  about: function() {
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    console.log(this.firstName, this.age);
  }
};

person1.about();

function personInfo() {
  console.log(`person name is ${this.firstName} and person age is ${this.age}`);
  console.log(this.firstName, this.age);
}

const person2 = {
  firstName: "Marc",
  age: 22,
  about: personInfo
};

const person3 = {
  firstName: "Timothy",
  age: 29,
  about: personInfo
};

const person4 = {
  firstName: "John",
  age: 39,
  about: personInfo
};

person2.about();
person3.about();
person4.about();

//This keyword, Window object

console.log(this);
console.log(window);

function myFunc1() {
  // "use strict";
  console.log(this);
}

function myFunc2() {
  console.log(window);
}

myFunc1();
myFunc2();

//Call , apply and bind method

//Call Methods

function hello() {
  console.log("hello world");
}

hello.call();

function about(hobby, favMusic) {
  console.log(this.firstName, this.age, hobby, favMusic)
}

const users1 = {
  firstName: "Obama",
  age: 52,
}

const users2 = {
  firstName: "Ben",
  age: 32,
}

about.call(users1,"Violon", "Mozart");
// users1.about.call();
about.call(users2, "Coding", "Electro");

//Apply Methods

const users3 = {
  firstName: "Vincent",
  age: 23,
}
about.apply(users3,["Football", "Rap"]);

//Bind Methods

const users4 = {
  firstName: "Roger",
  age: 30,
}

const myBind = about.bind(users4, "Surf", "Zouk");

myBind();

//Some warnings
//don't do this mistake

const perso = {
  firstName: "Jean-Jaures",
  age: 11,
  about: function() {
    console.log(this.firstName, this.age);
  }
};

// perso.about();
// const warNing = perso.about;
const warNing = perso.about.bind(perso);
warNing();