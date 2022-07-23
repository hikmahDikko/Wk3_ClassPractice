//Program to check if a word is palindrome or not

function checkPalindrome(String) {
  let len = String.length;

  for (let i = 0; i < len / 2; i++) {
    if (String[i] !== String[len - 1 - i]) {
      return "It is not a palindrome word";
    }
  }
  return "It is a palindrome word";
}
let word = "pap";

let result = checkPalindrome(word);

console.log(result);