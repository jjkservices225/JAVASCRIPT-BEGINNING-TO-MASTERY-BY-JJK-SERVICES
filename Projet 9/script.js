//VERY IMPOIRTANT ARRAY METHODS
//fForeach method

//je commente ses methodes

const numbers = [4, 2, 5, 8];

// function myfunc(number, index) {
//   console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number, index) {
//   console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//   console.log(number*3, index);
// });

const users = [
  { firstName: "Marc", age: 22 },
  { firstName: "Paul", age: 32 },
  { firstName: "Julien", age: 41 },
  { firstName: "Timothy", age: 18 },
];

// users.forEach(function(user){
//   console.log(user.firstName);
// });

users.forEach((user, index) => {
  console.log(user.firstName, index);
});

//Map method

const numbers1 = [6, 1, 8, 7];

// const square = function(number) {
//   return number * number;
// }

// const squareNumber = numbers1.map(function(number) {
//   return number * number;
// });

const squareNumber = numbers1.map((number, index) => {
  return ` index: ${index} ${number * number}`;
});

console.log(squareNumber);

const usersId = [
  { firstName: "Marc", age: 22 },
  { firstName: "Paul", age: 32 },
  { firstName: "Julien", age: 41 },
  { firstName: "Timothy", age: 18 },
];

const userName = usersId.map((user) => {
  return user.firstName;
});

console.log(userName);

//Filter method

const numbers3 = [2, 8, 12, 7, 18, 5];

// const isOdd = function(number) {
//   return number % 2 !== 0;
// }

const evenNumber = numbers3.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumber);

//Reduce method

const numbers4 = [8, 3, 14, 7, 16, 5];

const summ = numbers4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summ);

const userCart = [
  { productId: 1, productName: "mobile", price: 480 },
  { productId: 2, productName: "laptop", price: 1200 },
  { productId: 3, productName: "tv", price: 25000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);

//Sort Method

const numbers5 = [5, 9, 1200, 410, 3000];

numbers5.sort((a, b) => {
  return b - a;
});

// numbers5.sort((a, b) => a - b);

console.log(numbers5);

const userName1 = ["Marc", "Julien", "Paul", "Timothy"];

userName1.sort();

console.log(userName1);

const products = [
  { productId: 1, productName: "mobile", price: 480 },
  { productId: 2, productName: "laptop", price: 1200 },
  { productId: 3, productName: "car", price: 120000 },
  { productId: 4, productName: "Tee-Short", price: 50 },
  { productId: 5, productName: "tv", price: 25000 },
];

const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});
+
console.log(highToLow);

// Find Method

const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string) {
//   return string.length == 3;
// }

const ans = myArray.find((string) => string.length === 3);

// const ans1 = isLength3("dog")

console.log(ans);

const users1 = [
  { usersId: 1, userName: "Marc" },
  { usersId: 2, userName: "Paul" },
  { usersId: 3, userName: "julien" },
  { usersId: 4, userName: "Luc" },
  { usersId: 5, userName: "Timothy" },
];

// const myUsers = users1.find((user) => {
//   return user.usersId === 3;
// });

const myUsers = users1.find((user) => user.usersId === 3);

console.log(myUsers);

//Every Method

const array1 = [2, 4, 6, 9, 10];

const is1 = array1.every((num) => {
  return num % 2 === 0;
});

// const is1 = array1.every((num) => num % 2 === 0);

console.log(is1);

const userCards = [
  { productId: 1, productName: "mobile", price: 480 },
  { productId: 2, productName: "laptop", price: 1200 },
  { productId: 3, productName: "tv", price: 25000 },
];

// const shopping = userCards.every((CartItems) => {
//   return CartItems.price < 30000;
// });

const shopping = userCards.every((CartItems) => CartItems.price < 30000);

console.log(shopping);

//Some Method

const table = [1, 2, 3, 4, 5];

const even = table.some((Try) => {
  return Try % 2 === 0;
});

// const even = table.some((Try) => Try % 2 === 0);

console.log(even);

const userCard = [
  { productId: 1, productName: "mobile", price: 480 },
  { productId: 2, productName: "laptop", price: 1200 },
  { productId: 3, productName: "tv", price: 25000 },
];

// const shop = userCard.some((CartItems) => {
//   return CartItems.price > 30000;
// });

const shop = userCard.some((CartItems) => CartItems.price > 30000);

console.log(shop);

//Fill Method

const myFill = [1, 2, 3, 4, 4, 5, 6, 7, 8];

myFill.fill(0, 2, 5);

console.log(myFill);

//Splice method

const myTable = ["item1", "item2", "item3"];

const deletedItem = myTable.splice(1, 2, "Inserted Item1", "Inserted Item2");

console.log("delted Item", deletedItem);

console.log(myTable);
