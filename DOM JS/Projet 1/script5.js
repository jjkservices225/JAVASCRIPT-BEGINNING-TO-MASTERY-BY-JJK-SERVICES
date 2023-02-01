//Practice with events

const allButton = document.querySelectorAll(".my-buttons button");

allButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.style.backgroundColor = "yellow";
    e.target.style.color = "#333";
  });
});
