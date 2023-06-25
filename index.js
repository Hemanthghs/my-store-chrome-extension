const modeEle = document.getElementById("mode");
const mainEle = document.getElementById("main");
const keyValEle = document.getElementsByClassName("key-value");
const modeBtnEle = document.getElementById('mode');

modeBtnEle.addEventListener("change", function() {
    if(modeEle.checked == true) {
        if(mainEle.classList.contains('light-mode')) {
            mainEle.classList.remove('light-mode');
            mainEle.classList.add('dark-mode');
            for(let ele in keyValEle) {
                keyValEle[ele].classList.remove("key-value-light")
            }
        }
    } else {
        if(mainEle.classList.contains('dark-mode')) {
            mainEle.classList.remove('dark-mode');
            mainEle.classList.add('light-mode');
            for(let ele in keyValEle) {
                keyValEle[ele].classList.add("key-value-light")
            }
        }
    }
})

