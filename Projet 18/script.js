//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//Class keyword

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "toon na na na la";
  }
  // myFunc(a) {
  //   console.log(a);
  // }
}

const userOne = new CreateUser(
  "Vin",
  "Diesel",
  "vindiso1@gmail.com",
  43,
  "Palm Beach"
);

const userTwo = new CreateUser(
  "Vanessa",
  "Burgaff",
  "burgaff22@gmail.com",
  26,
  "Paris"
);

const userThree = new CreateUser(
  "Bernard",
  "Tapis",
  "bernardtapis@gmail.com",
  70,
  "Nice"
);

console.log(userOne.firstName);
console.log(userOne.sing());
console.log(userOne.is18());

// userOne.myFunc("Bobby");

console.log(Object.getPrototypeOf(userOne));

//Example using class keyword

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCut() {
    return this.age <= 1;
  }

  isCut() {
    return true;
  }
}

const animal1 = new Animal("Tom", 2);

console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isCut());
console.log(animal1.isSuperCut());

class dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCut() {
    return this.age <= 1;
  }

  isCut() {
    return true;
  }
}

const tommy = new dog("Tommy", 3);

console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCut());
console.log(tommy.isSuperCut());
