"use strict";

//THE CONDITIONS

//If else statement

let age = 17;

if (age >= 18) {
  console.log("User can play call of duty");
} else {
  console.log("User can play bubble shooter");
}

let number = 14;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//Ternary Operator
//Ternary Operator / conditional operator

let myAge1 = 15;
let drink;

if (myAge1 >= 5) {
  drink = "coffee";
} else {
  drink = "milk";
}

console.log(drink);

let myAge2 = 7;
let eat;

if (myAge2 >= 8) {
  eat = "taco's";
} else {
  eat = "sandwitch";
}

console.log(eat);

let myAge3 = 3;

let drinking = myAge3 >= 5 ? "coffee" : "milk";

console.log(drinking);

//and or operator
//&& || operator

let firstName = "JeanJacques";
let myAge4 = 22;

if (firstName[0] === "J") {
  console.log("Your name start with J");
}

if (myAge4 > 20) {
  console.log("You are above 20");
}

if (firstName[0] === "J" && myAge4 > 20) {
  console.log("Your name start with J and you are above 20 years");
}

let firstName1 = "JeanJacques";
let myAge5 = 17;

if (firstName1[0] === "J" && myAge5 > 20) {
  console.log("Your name start with J and you are above 20 years");
} else {
  console.log("inside else");
}

let firstName2 = "JeanJacques";
let myAge6 = 15;

if (firstName2[0] === "J" || myAge6 > 20) {
  console.log("inside if");
} else {
  console.log("inside else");
}

// Nested if else

// (JE COMMENTE CECI)

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number ?");

// if(userGuess === winningNumber) {
//   console.log("Your guess is rigth !");
// } else {
//   if(userGuess < winningNumber) {
//     console.log("too low !");
//   } else {
//     console.log("too high !");
//   }
// }

//If elseif else

// (JE COMMENTE CECI EGALEMENT)

// let tempInDegree = 50;

// if(tempInDegree < 5) {
//   console.log("extremely cold outside");
// } else if(tempInDegree < 16) {
//   console.log("It cold outside");
// } else if(tempInDegree < 25) {
//   console.log("wheather is okay");
// } else if(tempInDegree < 35) {
//   console.log("lets go for swim");
// } else if(tempInDegree < 45) {
//   console.log("turn on AC");
// } else {
//   console.log("too hot !");
// }

// (JE COMMENTE CECI EGALEMENT)

// let tempInDegree = 37;

// if(tempInDegree > 40) {
//   console.log("too hot !");
// } else if(tempInDegree > 30) {
//   console.log("lets go for swim");
// } else if(tempInDegree > 20) {
//   console.log("wheather is okay");
// } else if(tempInDegree > 10) {
//   console.log("It is very cold outside");
// } else {
//   console.log("extremely cold");
// }

//Switch statement

// (JE COMMENTE CECI EGALEMENT)

// let day = 7;

// if(day === 0) {
//   console.log("Sunday");
// } else if(day === 1) {
//   console.log("Monday");
// } else if(day === 2) {
//   console.log("Tuesday");
// } else if(day === 3) {
//   console.log("Wednesday");
// } else if(day === 4) {
//   console.log("Thrusday");
// } else if(day === 5) {
//   console.log("Friday");
// } else if(day === 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid Day !");
// }

let day = 4;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day !");
}
