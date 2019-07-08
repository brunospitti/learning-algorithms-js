console.log(`


----- Exercise 03 - Is Palindrome -----


`);

// code
const cleanString = str => {
  return str.toLowerCase().split(' ').join('').replace(/[^a-z]/gi, "");
}
const isPalindrome = str => {
  let cleanStr = cleanString(str);
  return cleanStr === cleanStr.split('').reverse().join('');
}

// test
console.log("isPalindrome -> ", isPalindrome("Madam I'm Adam"));
console.log("isPalindrome -> ", isPalindrome("race car"));
console.log("isPalindrome -> ", isPalindrome("not a palindrome"));