const mainEle = document.getElementById("main");
const keyValEle = document.getElementsByClassName("key-value");
const modeBtnEle = document.getElementById("mode");
const bodyEle = document.getElementById('body');
const myValEle = document.getElementsByClassName('my-value');

modeBtnEle.addEventListener("change", function () {
  mainEle.classList.toggle("light-mode");
  mainEle.classList.toggle("dark-mode");
  bodyEle.classList.toggle("light-mode");
  bodyEle.classList.toggle("dark-mode");
  for (let i = 0; i < keyValEle.length; i += 1) {
    keyValEle.item(i).classList.toggle("key-value-light");
    keyValEle.item(i).classList.toggle("tooltip-light");
  }
});

for (var i = 0; i < myValEle.length; i++) {
  myValEle[i].onclick = function () {
    const copyText = this.innerText;
    navigator.clipboard.writeText(copyText);
  }
}

