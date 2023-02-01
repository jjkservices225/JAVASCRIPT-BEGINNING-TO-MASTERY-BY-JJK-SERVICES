//Intro to Fetch API

//Fetch

//Error Handling in Fetch API

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong !!!");
    }
  })

  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Inside catch");
    console.log("ERROR !!!");
  });
