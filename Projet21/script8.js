//Promise and settimeout

//i want to resollve / reject promise after 2 secondes

function myPtromise() {
  return new Promise((resolve, reject) => {
    const value = false;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

myPtromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
