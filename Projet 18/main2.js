//Getters and setters

class Person {
  constructor(firstName, lastName, age) {
    this.firstName =firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName =firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("David", "Beckham", 42);

console.log(person1);
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);

person1.fullName = "Jules Cesar";
console.log(person1);
console.log(person1.fullName);

//Static methods and properties

class Human {
  constructor(firstName, lastName, age) {
    this.firstName =firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static classInfo() {
    return "this is human class";
  }

  static desc = "static property";

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName =firstName;
    this.lastName = lastName;
  }
  
  eat() {
    return `${this.firstName} is eating`;
  }

  isSuperCut() {
    return this.age <= 1;
  }

  isCut() {
    return true
  }
}

const person2 = new Human("Mikael", "Balack", 40);

console.log(person2.eat());

const ans = Human.classInfo();
console.log(Human.desc);
console.log(ans);
