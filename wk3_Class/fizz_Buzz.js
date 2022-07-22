//Program to return out every integer from 1 to the number

let number = 10;

function decNum(a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
}

decNum(number);

//Program to return if a number is either fizz or buzz

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
