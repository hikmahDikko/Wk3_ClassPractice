//Palindrome word
function checkPalindrome(String){
  let len = String.length;

  for(let i = 0; i < len / 2; i++){
    //compare index value
    if(String[i] !== String[len -1-i]){
      return "It is not a palindrome word";
    }
  }
  return "It is a palindrome word";
}
  let word = "mum";

  let result = checkPalindrome(word);

  console.log(result);