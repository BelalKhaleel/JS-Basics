let age = prompt("What is your age?");
document.getElementById("age").value = age;

let answer;
if (age >= 18) {
    answer = "you are over 18";
} else {
   answer = "you are under 18";
}
document.getElementById("validate").onclick = function() {
alert(answer);
}