const button = document.getElementById("myButton");
const title = document.getElementById("title");

button.addEventListener("click", function () {
  title.textContent = "Button Clicked! 🎉";
  title.style.color = "green";
});
