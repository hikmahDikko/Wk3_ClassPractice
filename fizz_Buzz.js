//Program to print out every integer from 1 to the number

let number = 9;
let num = '';
//Decimal number
function decNum(a) {
  for (let i = 1; i <= a; i++) {
    num += i + ' ';
  }
  return num;
}

let integer = decNum(number);
console.log(integer);

//Modulus of 2 (FIZZ), modulus of 3 (BUZZ)
function modTwo(b) {
  if (b % 2 == 0 && b % 3 == 0) {
    console.log("Fizz Buzz");
  } else if (b % 2 == 0) {
    console.log("Fizz");
  } else if (b % 3 == 0) {
    console.log("Buzz");
  }
}

modTwo(number);
