//Declaration of the array and the size
let arrayNum = [1, 5, 3, 47, 6, 34];
let size = 10;
let s = '';

//function to form a new list of array
function arrayFormed(arrayL) {
  for (let j = 0; j < size; j++) {
    s += '[' + arrayL + ']' + '\n';
  }
  return s;
}

//Result:
console.log("The ArrayList formed when size is " + size + " is as follows;");

let arr = arrayFormed(arrayNum);
console.log(arr);