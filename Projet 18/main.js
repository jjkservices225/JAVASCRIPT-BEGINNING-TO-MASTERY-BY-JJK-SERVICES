//OBJECT ORIENTED JAVASCRIPT / PROTOTYPAL INHERITANCE

//Super Class keyword

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
    return true
  }
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`
  }
}

const tommy = new Dog("Tommy", 3, 45);

console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
console.log(tommy.isCut());
console.log(tommy.isSuperCut());
