//Understand callbacks in general

function myFunc1(callback) {
  console.log("Hello my callback one");
  callback();
}
function myFunc2() {
  console.log("Hello my callback two");
}

myFunc1(myFunc2);

function getTwoNumbersAndAdd(number1, number2, onSucces, onFaillure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSucces(number1, number2);
  } else {
    onFaillure();
  }
}

function addTwonumbers(num1, num2) {
  console.log(num1 + num2);
}

function onFaillure() {
  console.log("WRONG DATA TYPE");
  console.log("Please pass number only");
}

getTwoNumbersAndAdd(4, "5", addTwonumbers, onFaillure);
