//Intro to Ajax

//HTTP Request

//AJAX : asynchronous javascript and XML

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

//step1
xhr.open("GET", URL);

// xhr.onreadystatechange = function () {
//   // console.log(xhr);
//   // console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response)
//     console.log(data);
//   }
// };

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};

xhr.send();
