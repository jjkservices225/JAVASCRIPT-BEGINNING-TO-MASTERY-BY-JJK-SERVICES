//Callback Hell and Pyramid of doom
//Callbacks in asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

//Callback Hell

// setTimeout(() => {
//   heading1.textContent = "Heading 1";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "green";
//     setTimeout(() => {
//       heading3.textContent = "Heading 4";
//       heading3.style.color = "gray";
//       setTimeout(() => {
//         heading4.textContent = "Heading 3";
//         heading4.style.color = "yellow";
//         setTimeout(() => {
//           heading5.textContent = "Heading 5";
//           heading5.style.color = "brown";
//           setTimeout(() => {
//             heading6.textContent = "Heading 6";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "Heading 7";
//               heading7.style.color = "pink";
//               setTimeout(() => {
//                 heading8.textContent = "Heading 8";
//                 heading8.style.color = "red";
//                 setTimeout(() => {
//                   heading9.textContent = "Heading 9";
//                   heading9.style.color = "beige";
//                   setTimeout(() => {
//                     heading10.textContent = "Heading 10";
//                     heading10.style.color = "black";
//                   }, 5500);
//                 }, 5000);
//               }, 4500);
//             }, 4000);
//           }, 3500);
//         }, 3000);
//       }, 2500);
//     }, 2000);
//   }, 1500);
// }, 1000);

// Pyramid of doom

function changeText(
  element,
  text,
  color,
  time,
  onSuccesCallback,
  onFaillureCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccesCallback) {
        onSuccesCallback();
      }
    } else {
      if (onFaillureCallback) {
        onFaillureCallback();
      }
    }
  }, time);
}

changeText(heading1, "heading one", "violet", 1000, () => {
  changeText(heading2, "heading two", "green", 1500, () => {
    changeText(heading3, "heading three", "gray", 2000, () => {
      changeText(heading4, "heading four", "yellow", 2500, () => {
        changeText(heading5, "heading five", "brown", 3000, () => {
          changeText(heading6, "heading six", "blue", 3500, () => {
            changeText(heading7, "heading seven", "pink", 4000, () => {
              changeText(heading8, "heading eight", "red", 4500, () => {
              })

            }, () => {console.log("heading8 does not exist")})
          }, () => {console.log("heading7 does not exist")})
        }, () => {console.log("heading6 does not exist")})
      }, () => {console.log("heading5 does not exist")
      }, () => {console.log("heading4 does not exist");})
    }, () => {console.log("heading3 does not exist");})
  }, () => {console.log("heading2 does not exist");})
}, () => {console.log("heading1 does not exist");})
