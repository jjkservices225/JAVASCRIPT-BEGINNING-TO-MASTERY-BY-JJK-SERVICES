//Function that returns promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resollve, reject) => {
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
}

ricePromise()
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
