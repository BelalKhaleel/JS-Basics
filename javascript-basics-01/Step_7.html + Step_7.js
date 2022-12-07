const num1 = prompt('Enter your shoe size ');
document.getElementById("shoe_size").value = num1;

const num2 = prompt('Enter your birth year ');
document.getElementById("year").value = num2;

var result = [(num1 * 2 + 5) * 50 - num2 + 1766]

function myFunction() {
    return result;
  }
  document.getElementById("validate").onclick = function() {
  let y = myFunction(num1,num2);
  alert(y);
  }