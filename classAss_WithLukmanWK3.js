//The word to swap
let word = "hello";

//function to swap the word
function wordSwap(a) {
  //A variable to get the length of the word
  let u = a.length - 2;

  //Variables to store some values (i.e. to help save some strings)
  let x = '';
  let y = '';

  // Looping through the word to get a string at a particular index
  for (let j = u; j < a.length; j++) {
    x += a[j] + '';
  }

  for (let i = 0; i < a.length - 2; i++) {
    y += a[i] + '';
  }

  //To print the word generated
  return (x + y);
}

let swap = wordSwap(word);
console.log(word + " swapped to " + swap);