let Name = prompt("What is your name?");
alert("Hello, " + Name);
let Surname = prompt("What is your surname?");
let City = prompt("What is your city?");
document.getElementById("name").value = Name;
document.getElementById("surname").value = Surname;
document.getElementById("city").value = City;
document.getElementById("validate").onclick = function() {
alert(`
Name : ${Name}
Surname : ${Surname}
City : ${City}
`)
}