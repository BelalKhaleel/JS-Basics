const num1 = parseInt(prompt('Enter the first number '));
document.getElementById("first_number").value = num1;
const num2 = parseInt(prompt('Enter the second number '));
document.getElementById("second_number").value = num2;
const product = num1 * num2;
document.getElementById("validate").onclick = function() {
alert(`The product of ${num1} and ${num2} is ${product}`);
}