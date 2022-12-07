const num1 = parseInt(prompt('Enter your shoe size '));
const num2 = parseInt(prompt('Enter your birth year '));
function myFunction(num, num2) {
    let x = [(num1 * 2 + 5) * 50 - num2 + 1766];

    return x;
  }

  let y = myFunction(num1,num2);
  alert(y);