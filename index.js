const mainEle = document.getElementById("main");
const keyValEle = document.getElementsByClassName("key-value");
const modeBtnEle = document.getElementById("mode");

modeBtnEle.addEventListener("change", function () {
  mainEle.classList.toggle("light-mode");
  mainEle.classList.toggle("dark-mode");
  for (let i = 0; i < keyValEle.length; i += 1) {
    keyValEle.item(i).classList.toggle("key-value-light");
  }
});
