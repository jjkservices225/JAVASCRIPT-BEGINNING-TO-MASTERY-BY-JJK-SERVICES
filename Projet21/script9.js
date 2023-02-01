//Promise.resolve and more about then method

//Promise resollve
//Promise chaining

const myPromise1 = Promise.resolve(5);

Promise.resolve(5).then((value1) => {
  console.log(value1);
});

//then methods

function myPromise2() {
  return new Promise((resolve, reject) => {
    resolve("foe");
  });
}

myPromise2()
  .then((value2) => {
    console.log(value2);
    value2 += "bar";
    return value2;
  })
  .then((value2) => {
    console.log(value2);
  });
