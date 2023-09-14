const mainEle = document.getElementById("main");
const keyValEle = document.getElementsByClassName("key-value");
const modeBtnEle = document.getElementById("mode");
const bodyEle = document.getElementById("body");
const myValEle = document.getElementsByClassName("my-value");
const saveBtnEle = document.getElementsByClassName("save-btn")[0];
const delBtnEle = document.getElementsByClassName("delete-btn")[0];
const keyEle = document.getElementById("key");
const valEle = document.getElementById("value");
const contentEle = document.getElementsByClassName("content")[0];
const copyEle = document.getElementsByClassName("copy")[0];
const msgEle = document.getElementsByClassName("msg")[0];
const deleteEle = document.getElementsByClassName("delete")[0];
const saveTabBtnEle = document.getElementsByClassName("save-tab-btn")[0];

let data = [];

let localData = JSON.parse(localStorage.getItem("mydata"));
copyMsg();

if (localData) {
  data = localData;
  renderData(localData);
}

function renderData(totalData) {
  copyMsg();
  let content = "";
  for (let i = 0; i < totalData.length; i++) {
    if (totalData[i]?.value?.length) {
      content += `
      <div class="key-value">
      <div class="tooltip">
        <div class="my-key">${totalData[i]?.key || "no-key"}</div>
        <span class="tooltiptext">${totalData[i].key}</span>
      </div>
      <div class="my-value">${totalData[i].value}</div>
    </div>
      `;
    }
  }
  contentEle.innerHTML = content;
  setClickListener();
}

function setClickListener() {
  for (var i = 0; i < myValEle.length; i++) {
    myValEle[i].ondblclick = function () {
      if (this.innerText.startsWith("http")) {
        window.open(this.innerText, (target = "_blank"));
      }
    };
    myValEle[i].addEventListener("click", function () {
      const copyText = this.innerText;
      navigator.clipboard.writeText(copyText);
      copyEle.innerHTML = `<b style="color: #7cd0ff">Copied...!</b>`;
      setTimeout(() => {
        copyEle.innerHTML = `Click the value to copy`;
      }, 500);
    });
  }
}

saveBtnEle.addEventListener("click", function () {
  const key = keyEle.value;
  const value = valEle.value;
  if (value?.length) {
    setData(key, value);
    keyEle.value = "";
    valEle.value = "";
    msgEle.classList.toggle("danger");
    msgEle.innerText = "Value added";
    setTimeout(() => {
      msgEle.classList.toggle("danger");
      msgEle.innerText = ``;
    }, 1000);
  } else {
    msgEle.classList.toggle("success");
    msgEle.innerText = "Value is empty...!";
    setTimeout(() => {
      msgEle.classList.toggle("success");
      msgEle.innerText = ``;
    }, 1000);
  }
  setClickListener();
});

function copyMsg() {
  let localData = JSON.parse(localStorage.getItem("mydata"));
  if (!localData) {
    copyEle.innerHTML = "<b>- No data -</b>";
  } else {
    copyEle.innerText = "Click on value to copy";
  }
}

function setData(key, value) {
  data.push({
    key: key,
    value: value,
  });
  localStorage.setItem("mydata", JSON.stringify(data));
  renderData(data);
}

delBtnEle.addEventListener("dblclick", function () {
  localStorage.clear();
  data = [];
  renderData(data);
});

saveTabBtnEle.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    setData(tabs[0].title, tabs[0].url);
  });
  msgEle.classList.toggle("danger");
  msgEle.innerText = "Value added";
  setTimeout(() => {
    msgEle.classList.toggle("danger");
    msgEle.innerText = ``;
  }, 1000);
});
