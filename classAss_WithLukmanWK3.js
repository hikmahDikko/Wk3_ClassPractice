//The word to swap
let word = "hello";

//Swapped word
function wordSwap(a) {
  //A variable to get the length of the word
  let u = a.length - 2;

  //Variable Declaration
  let x = '';
  let y = '';

  // String index
  for (let j = u; j < a.length; j++) {
    x += a[j] + '';
  }

  for (let i = 0; i < a.length - 2; i++) {
    y += a[i] + '';
  }

  //New word generated
  return (x + y);
}

let swap = wordSwap(word);
console.log(word + " swapped to " + swap);