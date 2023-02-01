//Split code into multiple files using ES6 modules.

// import { firstName } from "./fname.js";
// import { age } from "./age.js";

// console.log(firstName, age);

import { firstName as fname } from "./fname.js";
import { age } from "./age.js";
import hello, { Person } from "./person.js";

console.log(fname, age);

const person = new Person("John", "Doe", 33);
person.info();
console.log(person);
console.log(hello);
