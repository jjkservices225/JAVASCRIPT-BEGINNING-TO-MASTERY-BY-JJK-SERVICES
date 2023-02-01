//SetInterval and create little project with setInterval

const body = document.body;
const buttonStop = document.querySelector("button");

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.background = rgb;
}, 1000);

buttonStop.addEventListener("click", () => {
  clearInterval(intervalId);
  buttonStop.textContent = body.style.background;
});
