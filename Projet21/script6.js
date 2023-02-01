//Intro to promises

//promises

console.log("script start");

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const firedRicePromise = new Promise((resollve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resollve({ value: "Friedrice" });
  } else {
    reject("Could not do it");
  }
});

firedRicePromise
  .then(
    //promises resollve
    (myFrisdRice) => {
      console.log("lets eat ", myFrisdRice);
    }
  )
  //promises reject
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 0);

for (let i = 0; i <= 10; i++) {
  console.log(Math.random(), i);
}

console.log("script end");
