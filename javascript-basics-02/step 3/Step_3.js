var div = document.createElement('div');

document.body.appendChild(div).setAttribute('class', 'myclass');

const myDiv = document.querySelector(".myclass")
const nameInput = document.querySelector("#name")

nameInput.addEventListener("keyup", function() {
    myDiv.innerText = nameInput.value;
})