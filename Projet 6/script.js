          //THE OBJECTS IN JAVASCRIPT
//Intro to objects

const person1 = {name:"Marc" , age:25};

console.log(typeof person1);
console.log(person1.name);
console.log(person1.age);


const person2 = {
  name: "Julien",
  age: 32,
  hobbies: ["eat", "sleep", "code"]
};

console.log(person2);
console.log(typeof person2);
console.log(person2.name);
console.log(person2["name"]);
console.log(person2.age);
console.log(person2["age"]);
console.log(person2.hobbies);

person2.gender = "male";
console.log(person2);

//difference between Dot vs and Bracket Notation

const key = "email";
const person3 = {
  name: "Paul",
  age: 41,
  "person3 hobbies": ["guitar", "sleeping", "listening music"]
};

console.log(person3["person3 hobbies"]);

person3[key] = "koblakazo@gmail.com";
console.log(person3);

//How to Iterate objects

const person4 = {
  name: "leroy",
  age: 18,
  "person4 hobbies": ["basketball", "study", "drunk coffee"]
};

for(let key in person4) {
  console.log(key);
  console.log(person4[key]);
  console.log(`${key} : ${person4[key]}`);
  console.log(key, " : " ,person4[key]);
}

console.log(Object.keys(person4));
console.log(typeof (Object.keys(person4)));
const val1 = Array.isArray((Object.keys(person4)))
console.log(val1);

//Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
  key1: value1,
  key2: value2,
  [key1]: value1,
  [key2]: value2
}

console.log(obj);

const obj1 =[];
obj1[key1] = value1;
obj1[key2] = value2;

console.log(obj1);

//Spread operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];
console.log(newArray);  

const newArray1 = [..."123456789"];
console.log(newArray1);

//Spread operator in objects

const obj2 = {
  key1: "value1",
  key2: "value2",
}
const obj3 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
}

console.log(obj2);

const newObjet = { ...obj1, ...obj2};
console.log(newObjet);

const newObjet1 = { ...obj1, ...obj2, key70: "value70"};
console.log(newObjet1);

const newObjet2 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObjet2);

//Object Destructuring

const band = {
  bandName: "Rolling Stones",
  famousSong: "tumbling Dice",
  years: 1970,
  anotherFamousSong: "Paint It Black",
};


// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong);

let { bandName, famousSong, ...restProps } = band;

// bandName = "Queens";

// console.log(bandName);
console.log(bandName);
console.log(restProps);

//Objects inside Array

const users = [
  {userId: 1, firstName: "Marc", gender: "male"},
  {userId: 2, firstName: "Julien", gender: "male"},
  {userId: 3, firstName: "Paul", gender: "male"},
]

for(let user of users) {
  console.log(user);
  // console.log(user.userId);
  // console.log(user.firstName);
}

//Nested Destructuring
//the next

// const [user1, user2, user3] = users;
const [{firstName: user1firsname, userId}, {gender: user1gender}] = users;

console.log(user1firsname);
console.log(userId);
console.log(user1gender);