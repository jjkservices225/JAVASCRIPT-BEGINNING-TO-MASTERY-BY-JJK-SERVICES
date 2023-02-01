//MORE USEFUL THINGS
//Iterables

const firstName = "Julien";

for (let char of firstName) {
  console.log(char);
}

const items = ["item1", "item2", "item3"];

for (let item of items) {
  console.log(item);
}

//Sets

const numbers = new Set([0, 2, 3]);

console.log(numbers);

if (numbers.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}

const numbers1 = new Set();

numbers1.add(1);
numbers1.add(2);
numbers1.add(3);
numbers1.add(4);
numbers1.add(5);
numbers1.add(6);

console.log(numbers1);

for (let number of numbers1) {
  console.log(number);
}

const table = ["item1", "item2", "item3"];

console.log(table);

const table1 = new Set();

table1.add("item1");
table1.add("item2");
table1.add("item3");

console.log(table1);

const myTable = [1, 2, 4, 4, 6, 5, 6, 5];

const uniqueElements = new Set(myTable);

console.log(uniqueElements);

console.log(myTable);

//Maps

const person = {
  firstName: "Timothy",
  age: 7,
  1: "one",
};

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["1"]);

for (let key in person) {
  console.log(typeof key);
}

const person1 = new Map();
person1.set("firstname", "Marc");
person1.set("age", 7);
person1.set(1, "one");
person1.set([1, 1, 3], "onetwothree");
person1.set({ 1: "one" }, "onetwothree");
console.log(person1);
console.log(person1.get("firstname"));
console.log(person1.get("age"));
// console.log(person1.keys());

// for(let key of person1.keys()) {
//   console.log(key, typeof key);
// }

for (let [key, value] of person1) {
  console.log(key, value);
}

const person3 = new Map([
  ["firstName", "Marc"],
  ["age", 10],
]);

console.log(person3);

const person4 = {
  Id: 1,
  firstName: "Luc",
};

const userInfo = new Map();
userInfo.set(person4, { age: 8, gender: "male" });

console.log(userInfo);

console.log(person4.Id);

const extraInfo = new Map();
extraInfo.set(person4, { age: 8, gender: "male" });

console.log(extraInfo.get(person4));
console.log(extraInfo.get(person4).gender);

const person5 = {
  Id: 2,
  firstName: "Elodie",
};

const extraInfo1 = new Map();
extraInfo1.set(person5, { age: 15, gender: "female" });

console.log(extraInfo1.get(person5));
console.log(extraInfo1.get(person5).gender);

//clone using Objets assign

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1);

obj1.key3 = "value3";

console.log(obj1);
console.log(obj2);

//Optional chaining

const users1 = {
  firstName: "Beatrice",
  address: { rue: "Cocody 2 Plateaux" },
};

console.log(users1.firstName);
console.log(users1.address.rue);
